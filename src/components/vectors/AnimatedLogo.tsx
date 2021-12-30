import { keyframes } from '@stitches/react'
import { styled } from '~/styles'

type Props =
  | {
      height: number
    }
  | {
      width: number
    }

const drawPath = keyframes({
  '0%': { strokeDashoffset: 300 },
  '100%': { strokeDashoffset: 0 }
})

const AnimatedLogo = styled('svg', {
  '& .draw': {
    strokeDasharray: 300,
    strokeDashoffset: 300
  },
  '& [name="b"]': {
    animation: `${drawPath} 0.8s linear forwards`,
    animationDelay: '0.5s'
  },
  '& [name="ayu"]': {
    animation: `${drawPath} 1s ease-in-out forwards`,
    animationDelay: '0.8s'
  },
  '& [name="k1"]': {
    animation: `${drawPath} 0.4s ease-in-out forwards`,
    animationDelay: '1.8s'
  },
  '& [name="k2"]': {
    animation: `${drawPath} 0.6s ease-in-out forwards`,
    animationDelay: '2s'
  },
  '& [name="ur"]': {
    animation: `${drawPath} 0.8s linear forwards`,
    animationDelay: '2.2s'
  },
  '& [name="ni"]': {
    animation: `${drawPath} 0.7s linear forwards`,
    animationDelay: '2.6s'
  },
  '& [name="dot"]': {
    animation: `${drawPath} 0.3s linear forwards`,
    animationDelay: '3.2s'
  },
  '& [name="a"]': {
    animation: `${drawPath} 1s linear forwards`,
    animationDelay: '2.8s'
  },
  '& [name="decor"]': {
    animation: `${drawPath} 1s ease-in-out forwards`,
    animationDelay: '3.5s'
  }
})

const Bayu = (props: Props) => {
  return (
    <AnimatedLogo
      {...props}
      viewBox="0 0 147 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="draw"
        name="b"
        d="M3.49995 2.5C3.49995 2.5 2.49999 54 2.99998 51.5C3.49997 49 8.88516 40.931 15 39C23.5 36.3158 19.5 50.5 13.5 53.5C11.065 54.7175 11.5003 51.3913 14.5 48C18.892 43.0346 29 37.5 32.5 34"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        className="draw"
        name="ayu"
        d="M42 34.4999C39.5 27.4999 36 29.4999 34 31.9999C30 36.4999 28 44.4999 31 46.4999C34 48.4999 39.5 38.9999 41 36.9999C42.5 34.9999 44 30.4999 45.5 29.4999C47 28.4999 46.5 34.4999 49 36.4999C51.5 38.4999 57.4587 32.5 57.4587 30.5C57.292 27.5 57.7 20.8998 58.5 20.4998C59.5 19.9998 58.5192 21.9998 57.902 23.9998C57.268 27.6665 56.92 35.7628 59.5 36.4999C63 37.4998 66.3932 27.3202 67.5 23.9998C68 22.4998 69 17.5 69 22C68.5 25.8333 67.4 34.8001 67 40C66.5 46.4999 67 65 65 64.5C63 64 58 50 62.5 43C64.5 39.8 73.5 32.4998 76 29.4999C78 27.1 80 18.8333 79.5 19C78 19.5 77.5 31.5 80 32.5C82.5 33.5 88.3 20.4998 89.5 20.4998C90.5 21 91 25.5 92 26.5C94 28.5 99.4 22.4 101 20C102.6 17.6 103.5 17.5 103.5 17.5"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        className="draw"
        name="k1"
        d="M26 51C26 51 25 68.5 25 81C25 93.5 26 107.5 26 107.5"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        className="draw"
        name="k2"
        d="M34 81C30.1667 85.3333 22.5 94.5 22.5 96C22.5 97.5 40.5 104 50.5 107"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        className="draw"
        name="ur"
        d="M41 90.5001C41.5 89.0001 42 84 41.5 84C41 83.9999 40.382 96.382 41.5 97.5001C44.5 100.5 50.5 85.5 51.5 85.5C52.2694 85.5 53 92 54.5 92C58 92 64.5 84.5 65 83C65.5 81.5 66 73 65.5 73C65 73 64.5 91.5 65 91.5C65.5 91.5 70.8307 72.5423 73 72C75 71.5 78 74 79.5 74.5C80.2294 74.7431 81.6 73.9 82 73.5"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        className="draw"
        name="ni"
        d="M87 64.5C86.6667 71 85.5 85 86 85C87.5 85 91.7322 69.2678 93.5 67.5C94.5 66.5 96 66.1386 97.5 67.5C100 69.769 99 74 103.5 76.5C105.5 77.5 109.929 73.4267 110.5 72C111.5 69.5 112.9 62.5 112.5 62.5C112 62.5 111 74.5 112 78"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        className="draw"
        name="dot"
        d="M113 54C112.5 54.5 111.646 55.1464 112 55.5C112.5 56 113.5 55 113.5 54.5"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        className="draw"
        name="a"
        d="M129.5 62.5001C128 58.5001 126.311 57.5473 124.5 58C121 58.8749 117.5 66.9 117.5 70.5C117.5 72 117.5 74.5 119 75C120.5 75.5 122.6 73.2 125 70C127.5 66 132.5 57.5 133 57.5C134.5 57.5 135 64.6667 137 65C140.5 65.5833 144.2 60.8 145 60"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        className="draw"
        name="decor"
        d="M69.5 113C68.5 111 69.5 110 71 109C83 102.5 114.28 96.0734 116 95.5C117.72 94.9266 119 93.5 119 93.5"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </AnimatedLogo>
  )
}

export default Bayu
