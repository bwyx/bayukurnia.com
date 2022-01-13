import { css } from '..'
import container from '../container.style'
import stack from '../stack.style'

const styles = {
  header: stack({
    y: 'center',
    density: 'spaceBetween',
    css: {
      xBackground: '$bg',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      height: 60,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottom: '1px solid transparent',
      borderImage:
        'linear-gradient(to right, rgb($rgb$bg / 5%), rgb($rgb$bg / 80%) 30%, rgb($rgb$bg / 20%) 80%, rgb($rgb$bg / 90%) 90%) 1',
      '@supports (backdrop-filter: saturate(180%) blur(1rem))': {
        xBackgroundOpacity: 0.6,
        backdropFilter: 'saturate(180%) blur(1rem)'
      },
      '@md': { height: 80 }
    }
  }),
  container: `${container({ size: 'large' })} ${stack({
    y: 'center',
    density: 'spaceBetween'
  })}`,
  logo: css({
    xColor: '$brand',
    display: 'inherit',
    '& svg': {
      width: 'auto',
      height: 40,
      '@md': {
        height: 45
      }
    },
    '&:hover': { xColor: '$accent' }
  })(),
  menuList: stack({
    css: {
      '& li + li': { marginLeft: '0.5rem' }
    }
  }),
  menuItem: css({
    xColor: '$brand',
    textDecoration: 'none',
    fontSize: '$base',
    fontWeight: '500',
    '&:hover': { xColor: '$accent' }
  })()
}

export default styles
