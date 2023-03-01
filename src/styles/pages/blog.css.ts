import { globalStyle, style } from '@vanilla-extract/css'
import { box, text } from '~/styles/sprinkles'
import { postCard } from '~/components/blog/PostCard/PostCard.css'
import { space } from '~/styles/variables.css'

const postWrapper = style({
  position: 'relative',
  display: 'block',
  marginTop: space[2]
})

globalStyle(`${postWrapper}:hover ${postCard}`, {
  opacity: 0.5
})

globalStyle(`${postWrapper}:hover ${postCard}:hover`, {
  opacity: 1
})

const styles = {
  postWrapper,
  content: box({ flexGrow: 1 }),
  heading: text({
    lineHeight: 'tight',
    fontWeight: 'extrabold',
    fontSize: '2xl'
  }),
  description: text({ fontSize: 'lg' })
}

export default styles
