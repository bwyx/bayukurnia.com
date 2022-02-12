import { css } from '~/styles'

const style = css({
  ':not(pre) > &': {
    xColor: '$brand',
    xBackground: '$brand',
    xBackgroundOpacity: 0.1,
    fontFamily: '$mono',
    fontSize: '$sm',
    fontWeight: 600,
    padding: '0.2rem 0.4rem',
    borderRadius: '0.3rem'
  }
})()

const Code = ({ children }: { children: React.ReactNode }) => {
  return <code className={style}>{children}</code>
}

export default Code
