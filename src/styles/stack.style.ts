import { css } from '~/styles'

const stack = css({
  display: 'flex',

  variants: {
    dir: {
      col: { flexDirection: 'column' },
      row: { flexDirection: 'row' }
    },
    y: { top: {}, center: {}, bottom: {} },
    x: { left: {}, center: {}, right: {} },
    density: {
      packed: {},
      spaceBetween: {
        justifyContent: 'space-between !important'
      }
    }
  },

  compoundVariants: [
    { dir: 'col', y: 'top', css: { justifyContent: 'flex-start' } },
    { dir: 'col', y: 'center', css: { justifyContent: 'center' } },
    { dir: 'col', y: 'bottom', css: { justifyContent: 'flex-end' } },

    { dir: 'row', x: 'left', css: { justifyContent: 'flex-start' } },
    { dir: 'row', x: 'center', css: { justifyContent: 'center' } },
    { dir: 'row', x: 'right', css: { justifyContent: 'flex-end' } },

    { dir: 'col', x: 'left', css: { alignItems: 'flex-start' } },
    { dir: 'col', x: 'center', css: { alignItems: 'center' } },
    { dir: 'col', x: 'right', css: { alignItems: 'flex-end' } },

    { dir: 'row', y: 'top', css: { alignItems: 'flex-start' } },
    { dir: 'row', y: 'center', css: { alignItems: 'center' } },
    { dir: 'row', y: 'bottom', css: { alignItems: 'flex-end' } }
  ],

  defaultVariants: {
    dir: 'row'
  }
})

export default stack
