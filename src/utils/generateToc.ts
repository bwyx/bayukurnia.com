import type { MarkdownHeading } from 'astro'

export interface TocItem extends MarkdownHeading {
  childrens: TocItem[]
}

export interface Props {
  headings: MarkdownHeading[]
}

const h = (h: MarkdownHeading) => `<h${h.depth}>${h.text}</h${h.depth}>`

const isDeeper = (hA: TocItem, hB: TocItem) => hA.depth > hB.depth

const pushHeading = (heading: TocItem, parentHeading: TocItem): TocItem => {
  const { childrens } = parentHeading

  const lastChildren = childrens[childrens.length - 1]
  if (lastChildren && isDeeper(heading, lastChildren)) {
    pushHeading(heading, lastChildren)
    return parentHeading
  }

  if (heading.depth - 1 !== parentHeading.depth) {
    throw new Error(
      `Orphan heading found: ${h(heading)}, previous: ${h(parentHeading)}`
    )
  }

  parentHeading.childrens.push(heading)
  return parentHeading
}

const generateToc = (headings: MarkdownHeading[]) =>
  headings.reduce((t, h) => {
    const heading: TocItem = { ...h, childrens: [] }
    const prevHeading = t[t.length - 1]

    if (prevHeading && isDeeper(heading, prevHeading)) {
      pushHeading(heading, prevHeading)
    } else {
      t.push(heading)
    }

    return t
  }, [] as TocItem[])

export default generateToc
