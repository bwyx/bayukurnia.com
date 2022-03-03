interface Props {
  width?: number
  height?: number
  className?: string
}

const QuotationMark = ({ width = 24, height = 24, className }: Props) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.07041 3C4.90612 4.84909 1 9.25168 1 14.9354C1 18.4465 3.27857 21 6.07571 21C9.00531 21 10.5027 18.8295 10.5027 16.8506C10.5027 14.5524 8.8751 12.7672 6.46633 12.7672C5.75245 12.7672 5.03408 12.9609 4.64347 13.2779C4.64347 10.469 6.92204 7.14944 10.4353 5.42803L9.07041 3ZM21.5678 3C17.4035 4.85129 13.4322 9.25388 13.4322 14.9354C13.4322 18.4465 15.7759 21 18.5731 21C21.5027 21 23 18.8295 23 16.8506C23 14.5524 21.3724 12.7672 18.9008 12.7672C18.1847 12.7672 17.5337 12.9609 17.1431 13.2779C17.1431 10.469 19.4216 7.14944 22.9349 5.42803L21.5678 3Z"
      fill="currentColor"
    />
  </svg>
)

export default QuotationMark
