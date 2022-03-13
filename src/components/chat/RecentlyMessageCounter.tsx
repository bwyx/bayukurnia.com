import { useState, useEffect, useCallback } from 'react'
import { formatDistanceToNow } from 'date-fns'

const getFormattedTime = (time: number) =>
  formatDistanceToNow(time, {
    addSuffix: true
  })

type Props = JSX.IntrinsicElements['span'] & {
  time: number
}

const RecentlyMessageCounter = ({ time, ...props }: Props) => {
  const [formattedTime, setFormattedTime] = useState(getFormattedTime(time))

  const updateTime = useCallback(
    () => setFormattedTime(getFormattedTime(time)),
    [time]
  )

  useEffect(() => {
    const interval = setInterval(() => updateTime(), 10000)

    return () => clearInterval(interval)
  }, [updateTime])

  return <span {...props}>{formattedTime}</span>
}

export default RecentlyMessageCounter
