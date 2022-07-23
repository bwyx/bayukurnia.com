import { createVar, globalStyle, style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { box } from '~/styles/sprinkles'
import { rgb } from '~/styles/variables.css'

const $ = {
  calloutColor: createVar('calloutColor')
}

const baseCallout = style({
  padding: '1.5rem',
  fontSize: '0.85em',
  backgroundColor: `rgb(${$.calloutColor} / 0.1)`,
  border: `1px solid rgb(${$.calloutColor} / 0.2)`
})

const styles = {
  callout: recipe({
    base: [baseCallout, box({ borderRadius: 'xl' })],
    variants: {
      type: {
        info: { vars: { [$.calloutColor]: rgb.blue } },
        warning: { vars: { [$.calloutColor]: rgb.yellow } },
        important: { vars: { [$.calloutColor]: rgb.red } }
      }
    },
    defaultVariants: { type: 'info' }
  })
}

globalStyle(`${baseCallout} > p`, {
  marginTop: '0 !important',
  marginBottom: '0 !important'
})

globalStyle(`${baseCallout} code`, {
  fontSize: '0.9em'
})

export default styles
