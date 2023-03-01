import { globalStyle, keyframes, style } from '@vanilla-extract/css'
import { media } from '~/styles/variables.css'

const drawPath = keyframes({
  '0%': { strokeDashoffset: 300 },
  '100%': { strokeDashoffset: 0 }
})

const animatedLogo = style({
  '@media': {
    [media.motionSafe]: {
      strokeDasharray: 300,
      strokeDashoffset: 300,
      willChange: 'stroke-dashoffset'
    }
  }
})

globalStyle(`${animatedLogo} [name=b]`, {
  animation: `${drawPath} 0.8s linear forwards`,
  animationDelay: '0.5s'
})

globalStyle(`${animatedLogo} [name=ayu]`, {
  animation: `${drawPath} 1s ease-in-out forwards`,
  animationDelay: '0.8s'
})

globalStyle(`${animatedLogo} [name=k1]`, {
  animation: `${drawPath} 0.4s ease-in-out forwards`,
  animationDelay: '1.8s'
})

globalStyle(`${animatedLogo} [name=k2]`, {
  animation: `${drawPath} 0.6s ease-in-out forwards`,
  animationDelay: '2s'
})

globalStyle(`${animatedLogo} [name=ur]`, {
  animation: `${drawPath} 0.8s linear forwards`,
  animationDelay: '2.2s'
})

globalStyle(`${animatedLogo} [name=ni]`, {
  animation: `${drawPath} 0.7s linear forwards`,
  animationDelay: '2.6s'
})

globalStyle(`${animatedLogo} [name=dot]`, {
  animation: `${drawPath} 0.3s linear forwards`,
  animationDelay: '3.2s'
})

globalStyle(`${animatedLogo} [name=a]`, {
  animation: `${drawPath} 1s linear forwards`,
  animationDelay: '2.8s'
})

const styles = { animatedLogo }
export default styles
