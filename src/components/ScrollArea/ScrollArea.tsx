import * as Primitives from '@radix-ui/react-scroll-area'

import styles from './ScrollArea.css'

interface Props {
  width?: string
  height?: string
  children: React.ReactNode
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
