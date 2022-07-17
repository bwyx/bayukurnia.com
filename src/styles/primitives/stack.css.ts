import { recipe } from '@vanilla-extract/recipes'
import { box } from '~/styles/sprinkles'

const stack = recipe({
  base: box({ display: 'flex' }),

  variants: {
    dir: {
      col: box({ flexDirection: 'column' }),
      row: box({ flexDirection: 'row' }),
      'col-reverse': box({ flexDirection: 'column-reverse' }),
      'row-reverse': box({ flexDirection: 'row-reverse' })
    },
    y: { top: {}, center: {}, bottom: {} },
    x: { left: {}, center: {}, right: {} },
    density: {
      packed: {},
      spaceBetween: {
        justifyContent: 'space-between !important'
      }
    },
    grow: {
      true: { flexGrow: 1 }
    }
  },

  compoundVariants: [
    // TODO: Too many compound variants
    {
      variants: { dir: 'col', x: 'left' },
      style: box({ alignItems: 'flex-start' })
    },
    {
      variants: { dir: 'col', x: 'center' },
      style: box({ alignItems: 'center' })
    },
    {
      variants: { dir: 'col', x: 'right' },
      style: box({ alignItems: 'flex-end' })
    },

    {
      variants: { dir: 'col', y: 'top' },
      style: box({ alignItems: 'flex-start' })
    },
    {
      variants: { dir: 'col', y: 'center' },
      style: box({ alignItems: 'center' })
    },
    {
      variants: { dir: 'col', y: 'bottom' },
      style: box({ alignItems: 'flex-end' })
    },

    {
      variants: { dir: 'row', x: 'left' },
      style: box({ alignItems: 'flex-start' })
    },
    {
      variants: { dir: 'row', x: 'center' },
      style: box({ alignItems: 'center' })
    },
    {
      variants: { dir: 'row', x: 'right' },
      style: box({ alignItems: 'flex-end' })
    },

    {
      variants: { dir: 'row', y: 'top' },
      style: box({ alignItems: 'flex-start' })
    },
    {
      variants: { dir: 'row', y: 'center' },
      style: box({ alignItems: 'center' })
    },
    {
      variants: { dir: 'row', y: 'bottom' },
      style: box({ alignItems: 'flex-end' })
    },

    {
      variants: { dir: 'col-reverse', x: 'left' },
      style: box({ alignItems: 'flex-start' })
    },
    {
      variants: { dir: 'col-reverse', x: 'center' },
      style: box({ alignItems: 'center' })
    },
    {
      variants: { dir: 'col-reverse', x: 'right' },
      style: box({ alignItems: 'flex-end' })
    },

    {
      variants: { dir: 'col-reverse', y: 'top' },
      style: box({ alignItems: 'flex-start' })
    },
    {
      variants: { dir: 'col-reverse', y: 'center' },
      style: box({ alignItems: 'center' })
    },
    {
      variants: { dir: 'col-reverse', y: 'bottom' },
      style: box({ alignItems: 'flex-end' })
    },

    {
      variants: { dir: 'row-reverse', x: 'left' },
      style: box({ alignItems: 'flex-start' })
    },
    {
      variants: { dir: 'row-reverse', x: 'center' },
      style: box({ alignItems: 'center' })
    },
    {
      variants: { dir: 'row-reverse', x: 'right' },
      style: box({ alignItems: 'flex-end' })
    },

    {
      variants: { dir: 'row-reverse', y: 'top' },
      style: box({ alignItems: 'flex-start' })
    },
    {
      variants: { dir: 'row-reverse', y: 'center' },
      style: box({ alignItems: 'center' })
    },
    {
      variants: { dir: 'row-reverse', y: 'bottom' },
      style: box({ alignItems: 'flex-end' })
    }
  ],

  defaultVariants: { dir: 'row' }
})

export default stack
