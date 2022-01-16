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
      '@sm': {
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
    gridArea: 'details',
    mr: '$4'
  })(),
  postTitle: text({
    size: {
      '@initial': '3xl',
      '@md': '4xl',
      '@lg': '5xl'
    },
    leading: 'tight',
    weight: 'extrabold',
    css: { maxWidth: '15ch' }
  }),
  postSnippet: text({
    size: {
      '@initial': 'base',
      '@md': 'lg',
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
      '@sm': { my: '$0' }
    }
  }),
  authorDetails: stack({ dir: 'col' }),
  authorPicture: css({
    position: 'relative',
    height: 38,
    width: 38,
    boxShadow: '0 0px 0px 2px rgb($rgb$bg), 0 0 0px 4px rgb($rgb$brand)',
    borderRadius: '$full',
    marginRight: '1rem',
    display: 'inherit',
    overflow: 'hidden',
    '@md': { width: 48, height: 48 }
  })(),
  authorName: text({
    weight: 'medium',
    leading: 'none',
    size: {
      '@initial': 'sm',
      '@md': 'base'
    },
    css: { xColor: '$fg' }
  }),
  publishedDate: text({
    leading: 'none',
    weight: 'medium',
    size: {
      '@initial': 'xs',
      '@md': 'sm'
    },
    css: {
      xColor: '$fg',
      xColorOpacity: 0.5,
      marginTop: '0.5rem',
      gridArea: 'date'
    }
  }),
  cover: css({
    gridArea: 'cover',
    position: 'relative',
    pointerEvents: 'none',
    margin: '0 auto',
    width: 280,
    height: 280,
    zIndex: 1,
    '@sm': {
      marginRight: '-$20',
      width: 340,
      height: 340
    },
    '@md': {
      maxWidth: '38vw',
      maxHeight: '38vw',
      margin: 0
    },
    '@lg': {
      width: 420,
      height: 420
    }
  })(),
  imgOuter: css({
    position: 'relative',
    width: '100%',
    height: '100%',
    borderRadius: '3.75%',
    overflow: 'hidden'
  })(),
  img: css({
    transitionDuration: '0.5s',
    transitionTimingFunction: 'ease-in-out'
  })(),
  imgBlur: css({
    willChange: 'transform, filter, opacity',
    transform: 'scale(1.05)',
    filter: 'blur(8px) saturate(0) !important',
    opacity: 0.1
  })(),
  gradientBackground: css({
    width: '240%',
    position: 'absolute',
    right: '-50%',
    bottom: '-55%'
  })()
}

export default styles
