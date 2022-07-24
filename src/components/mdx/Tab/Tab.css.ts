import { style } from '@vanilla-extract/css'
import { box, text } from '~/styles/sprinkles'
import { rgb, space } from '~/styles/variables.css'

const styles = {
  tabList: style([
    {
      marginLeft: space[4]
    },
    box({ display: 'flex' })
  ]),
  tabTrigger: style([
    {
      padding: `${space[1]} ${space[2]}`,
      borderBottom: '1px solid transparent',
      color: `rgb(${rgb.fg3})`,
      selectors: {
        '&[data-state=active]': {
          color: `rgb(${rgb.brand})`,
          borderColor: `rgb(${rgb.brand})`
        }
      }
    },
    text({
      fontSize: 'xs',
      letterSpacing: 'wide'
    })
  ]),
  tabContent: box({
    borderRadius: 'lg'
  })
}

export default styles
