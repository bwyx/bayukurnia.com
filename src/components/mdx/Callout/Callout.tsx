import type { RecipeVariants } from '@vanilla-extract/recipes'

import styles from './Callout.css'

interface Props {
  children: React.ReactNode
}

const Callout = ({
  children,
  type
}: Props & RecipeVariants<typeof styles.callout>) => (
  <aside className={styles.callout({ type })}>{children}</aside>
)

export default Callout
