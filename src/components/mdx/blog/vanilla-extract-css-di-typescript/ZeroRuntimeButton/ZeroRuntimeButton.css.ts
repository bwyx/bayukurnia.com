import { style } from '@vanilla-extract/css'

const styles = {
  button: style({
    padding: '0.5rem 1.5rem',
    fontWeight: '500',
    color: 'white',
    backgroundColor: 'rebeccapurple',
    borderRadius: '9999px',
    ':hover': {
      backgroundColor: 'blueviolet'
    }
  })
}

export default styles
