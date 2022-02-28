import * as Primitives from '@radix-ui/react-scroll-area'
import { css } from '~/styles'

interface Props {
  width?: string
  height?: string
  children: React.ReactNode
}

const SCROLLBAR_SIZE = 7

const styles = {
  root: css({
    borderRadius: 4,
    overflow: 'hidden'
  })(),
  viewport: css({
    width: '100%',
    height: '100%',
    borderRadius: 'inherit'
  })(),
  scrollbar: css({
    display: 'flex',
    // ensures no selection
    userSelect: 'none',
    // disable browser handling of all panning and zooming gestures on touch devices
    touchAction: 'none',
    padding: 2,
    '&[data-orientation="vertical"]': { width: SCROLLBAR_SIZE },
    '&[data-orientation="horizontal"]': {
      flexDirection: 'column',
      height: SCROLLBAR_SIZE
    }
  })(),
  thumb: css({
    flex: 1,
    xBackground: '$fg1',
    xBackgroundOpacity: 0.2,
    // increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '100%',
      height: '100%',
      minWidth: 44,
      minHeight: 44
    }
  })()
}

const ScrollArea = ({ width, height, children }: Props) => (
  <Primitives.Root className={styles.root} style={{ width, height }}>
    <Primitives.Viewport className={styles.viewport}>
      {children}
    </Primitives.Viewport>
    <Primitives.Scrollbar orientation="horizontal" className={styles.scrollbar}>
      <Primitives.Thumb className={styles.thumb} />
    </Primitives.Scrollbar>
    <Primitives.Scrollbar orientation="vertical" className={styles.scrollbar}>
      <Primitives.Thumb className={styles.thumb} />
    </Primitives.Scrollbar>
    <Primitives.Corner />
  </Primitives.Root>
)

export default ScrollArea
