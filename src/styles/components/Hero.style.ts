import { css } from '~/styles'
import container from '~/styles/container.style'
import text from '~/styles/text.style'
import stack from '~/styles/stack.style'

const styles = {
  header: css({
    pt: '$8',
    '@md': { pb: '$6' },
    '@lg': { pt: '$12', pb: '$8' }
  })(),
  container: container({
    size: 'large',
    css: {
      '@md': {
        display: 'grid',
        alignItems: 'center',
        gridTemplateRows: 'auto 1fr auto',
        gridTemplateColumns: '1fr',
        gridTemplateAreas: `
    "... cover"
    "details cover"
    "author cover"
    `
      }
    }
  }),
  postDetails: css({
    gridArea: 'details'
  })(),
  postTitle: text({
    size: {
      '@initial': '3xl',
      '@sm': '4xl',
      '@lg': '5xl'
    },
    leading: 'tight',
    weight: 'extrabold',
    css: { maxWidth: '15ch' }
  }),
  postSnippet: text({
    size: {
      '@initial': 'base',
      '@lg': 'xl'
    },
    css: {
      mt: '$2',
      xColorOpacity: 0.5,
      xColor: '$fg',
      maxWidth: '35ch'
    }
  }),
  postAuthor: stack({
    dir: 'row',
    y: 'center',
    css: {
      gridArea: 'author',
      my: '$8',
      '@md': { my: '$0' }
    }
  }),
  authorDetails: stack({ dir: 'col' }),
  authorPicture: css({
    position: 'relative',
    height: 48,
    width: 48,
    boxShadow: '0 0px 0px 2px rgb($rgb$bg), 0 0 0px 4px rgb($rgb$brand)',
    borderRadius: '$full',
    marginRight: '1rem',
    display: 'inherit',
    overflow: 'hidden',
    '@lg': { width: 54, height: 54 }
  })(),
  authorName: text({
    weight: 'medium',
    leading: 'none',
    css: { xColor: '$fg' }
  }),
  publishedDate: text({
    size: 'xs',
    leading: 'none',
    weight: 'medium',
    css: {
      xColor: '$fg',
      xColorOpacity: 0.5,
      marginTop: '0.5rem',
      gridArea: 'date'
    }
  }),
  cover: css({
    gridArea: 'cover',
    width: '100%',
    height: '100%',
    position: 'relative',
    pointerEvents: 'none',
    margin: '0 auto',
    maxWidth: 282,
    zIndex: 1,
    '@sm': {
      margin: 0,
      width: 342
    },
    '@md': {
      maxWidth: '40vw',
      margin: 0
    },
    '@lg': {
      width: 422
    }
  })(),
  gradientBackground: css({
    width: '240%',
    position: 'absolute',
    right: '-50%',
    bottom: '-55%'
  })()
}

export default styles
