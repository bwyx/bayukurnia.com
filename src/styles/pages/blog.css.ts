import { globalStyle, style } from '@vanilla-extract/css'
import { box, text } from '~/styles/sprinkles'
import { postCard } from '~/components/blog/PostCard/PostCard.css'
import { media, space } from '~/styles/variables.css'

const posts = style([
  { marginTop: space[2] },
  box({
    display: 'block',
    position: 'relative'
  })
])

globalStyle(`${posts}:hover ${postCard}`, {
  opacity: 0.5
})

globalStyle(`${posts}:hover ${postCard}:hover`, {
  opacity: 1
})

const styles = {
  posts,
  content: style({
    marginTop: space[4],
    '@media': {
      [media.lg]: {
        marginTop: 0
      }
    }
  }),
  heading: text({
    lineHeight: 'tight',
    fontWeight: 'extrabold',
    fontSize: '2xl'
  }),
  description: text({ fontSize: 'lg' })
}

export default styles
