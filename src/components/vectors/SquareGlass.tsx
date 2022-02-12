interface Props {
  width?: number
  height?: number
  ratio?: number
  gradientScale?: number
  backgroundScale?: number
  backgroundRight?: number
  backgroundBottom?: number
}

const Glass = ({
  width = 420,
  height = 420,
  ratio = 1,
  gradientScale = 438,
  backgroundScale = 240,
  backgroundRight = 25,
  backgroundBottom = 30
}: Props) => {
  const heightRatio = ratio ? height / ratio : height
  return (
    <>
      <svg
        style={{
          pointerEvents: 'none',
          width: `${backgroundScale}%`,
          position: 'absolute',
          right: 0,
          bottom: 0,
          transform: `translate(${backgroundRight}%, ${backgroundBottom}%)`
        }}
        viewBox="0 0 1008 772"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.5" filter="url(#filter0_f_29_31)">
          <path
            opacity="0.5"
            d="M150 385.093L541.5 150L933 385.093V386.851L541.5 621.945L150 386.851V385.093Z"
            fill="url(#paint0_linear_29_31)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_29_31"
            x="0"
            y="0"
            width="1083"
            height="771.945"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="75"
              result="effect1_foregroundBlur_29_31"
            />
          </filter>
          <linearGradient
            id="paint0_linear_29_31"
            x1="848.5"
            y1="211.5"
            x2="87.5"
            y2="538.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="rgb(var(--rgb-brand))" />
            <stop offset="1" stopColor="#26BBBB" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          inset: 0,
          width: 'calc(100% + 2px)',
          height: 'calc(100% + 2px)',
          margin: '-1px -1px 0 -1px'
        }}
        viewBox={`0 0 ${width + 2} ${heightRatio + 2}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="0.5"
          width={width + 1}
          height={heightRatio + 1}
          rx="24"
          fill="url(#paint0_radial_21_350)"
          fillOpacity="0.5"
        />
        <rect
          x="0.5"
          y="0.5"
          width={width + 1}
          height={heightRatio + 1}
          rx="24"
          stroke="url(#paint1_linear_21_350)"
        />
        <defs>
          <radialGradient
            id="paint0_radial_21_350"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform={`translate(172.5 46.5) rotate(58.555) scale(${gradientScale})`}
          >
            <stop stopColor="rgb(var(--rgb-glass))" stopOpacity="0.7" />
            <stop
              offset="1"
              stopColor="rgb(var(--rgb-glass))"
              stopOpacity="0"
            />
          </radialGradient>
          <linearGradient
            id="paint1_linear_21_350"
            x1="-16"
            y1="-34"
            x2="106%"
            y2="115%"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="rgb(var(--rgb-glass))" stopOpacity="0.65" />
            <stop
              offset="1"
              stopColor="rgb(var(--rgb-glass))"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>
      </svg>
    </>
  )
}

export default Glass
