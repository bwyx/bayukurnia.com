import type { MarkdownHeading } from 'astro'
import { useEffect, useState } from 'react'

import generateToc from '~/utils/generateToc'

import styles from './TOC.css'

interface TocItemProps {
  items: ReturnType<typeof generateToc>
}

const TOC = ({ headings }: { headings: MarkdownHeading[] }) => {
  const [currentHeading, setCurrentHeading] = useState({
    slug: headings[0].slug,
    text: headings[0].text
  })

  useEffect(() => {
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
      rootMargin: '128px 0% -66%',
      threshold: 1
    }

    const headingsObserver = new IntersectionObserver(
      setCurrent,
      observerOptions
    )

    // Observe all the headings in the main page content.
    document
      .querySelectorAll('article :is(h1,h2,h3,h4,h5)')
      .forEach((h) => headingsObserver.observe(h))

    // Stop observing when the component is unmounted.
    return () => headingsObserver.disconnect()
  }, [])

  const TocItem = ({ items }: TocItemProps) => {
    return (
      <ul className={styles.ul}>
        {items.map(({ slug, text, depth, childrens }) => {
          return (
            <li key={slug} data-depth={depth} className={styles.li}>
              <a
                data-turbo="false"
                href={`#${slug}`}
                className={
                  styles.a[currentHeading.slug === slug ? 'active' : 'inactive']
                }
              >
                {text}
              </a>
              {childrens.length ? <TocItem items={childrens} /> : null}
            </li>
          )
        })}
      </ul>
    )
  }

  return <TocItem items={generateToc(headings)} />
}

export default TOC
