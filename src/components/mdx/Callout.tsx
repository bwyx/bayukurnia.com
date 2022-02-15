import { VariantProps } from '@stitches/core'
import { css } from '~/styles'

const style = css({
  padding: '1.5em',
  xBackgroundOpacity: 0.1,
  fontSize: '0.85em',
  borderRadius: '$xl',
  p: {
    my: '$0 !important'
  },
  code: {
    fontSize: '0.9em !important'
  },
  variants: {
    type: {
      info: {
        xBackground: '$blue',
        border: '1px solid rgb($rgb$blue / 0.2)'
      },
      warning: {
        xBackground: '$yellow',
        border: '1px solid rgb($rgb$yellow / 0.2)'
      },
      important: {
        xBackground: '$red',
        border: '1px solid rgb($rgb$red / 0.2)'
      }
    }
  },
  defaultVariants: {
    type: 'info'
  }
})

type styleProps = VariantProps<typeof style>
interface Props {
  children: React.ReactNode
}

const Callout = ({ children, type }: Props & styleProps) => (
  <aside className={style({ type })}>{children}</aside>
)

export default Callout
