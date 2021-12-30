import type { NextPage } from 'next'

export type Page<P = Record<string, unknown>> = NextPage & {
  props?: P
  layout?: (page: React.ReactNode) => JSX.Element
}
