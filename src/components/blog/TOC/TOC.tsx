import type { MarkdownHeading } from 'astro'
import { For, createSignal, onMount } from 'solid-js'

import generateToc from '~/utils/generateToc'

import styles from './TOC.css'

interface TocItemProps {
  items: ReturnType<typeof generateToc>
}

const TOC = ({
  headings,
  title = 'Overview'
}: {
  headings: MarkdownHeading[]
  title?: string
}) => {
  const h1 = { depth: 2, slug: 'overview', text: title }
  const items = [h1, ...headings]

  const [open, setOpen] = createSignal(false)
  const [currentHeading, setCurrentHeading] = createSignal({
    slug: h1.slug,
    text: h1.text
  })

  onMount(() => {
    const setCurrent: IntersectionObserverCallback = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setCurrentHeading({
            slug: entry.target.id,
            text: entry.target.textContent || ''
          })
          break
        }
      }
    }

    const observerOptions: IntersectionObserverInit = {
      // Negative top margin accounts for `scroll-margin`.
      // Negative bottom margin means heading needs to be towards top of viewport to trigger intersection.
      rootMargin: '15% 0% -66%',
      threshold: 1
    }

    const headingsObserver = new IntersectionObserver(
      setCurrent,
      observerOptions
    )

    // Observe all the headings in the main page content.
    document
      .querySelectorAll('article :is(h1,h2,h3,h4,h5,h6)')
      .forEach((h) => headingsObserver.observe(h))

    // Stop observing when the component is unmounted.
    return () => headingsObserver.disconnect()
  })

  const TocItem = ({ items }: TocItemProps) => {
    return (
      <ul class={styles.ul}>
        <For each={items}>
          {({ slug, text, depth, childrens }) => {
            return (
              <li data-depth={depth} class={styles.li}>
                <a
                  data-turbo="false"
                  href={`#${slug}`}
                  class={
                    styles.a[
                      currentHeading().slug === slug ? 'active' : 'inactive'
                    ]
                  }
                >
                  {text}
                </a>
                {childrens.length ? <TocItem items={childrens} /> : null}
              </li>
            )
          }}
        </For>
      </ul>
    )
  }

  return (
    <div class={styles.outer}>
      <div class={styles.toc[open() ? 'show' : 'hide']}>
        <TocItem items={generateToc(items)} />
      </div>
      <div class={styles.titleWrapper}>
        <h2 class={styles.title}>on this page</h2>
        <button class={styles.currentHeading} onClick={() => setOpen(!open())}>
          {currentHeading().slug !== 'overview'
            ? currentHeading().text
            : h1.text}
          <svg
            class={styles.currentHeadingIcon[open() ? 'rotate' : 'normal']}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Stroke 1"
              d="M5 15.5C5 15.5 9.144 8.5 12 8.5C14.855 8.5 19 15.5 19 15.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default TOC
