import { useEffect, useMemo, useRef, useState } from 'react'

export default function useCountDown(maxTime: number = 60) {
  const timer = useRef<any>(null)
  const [count, setCount] = useState(maxTime)
  const [isRunning, setRunning] = useState(false)

  useEffect(() => {
    return () => clearInterval(timer.current)
  }, [])

  return useMemo(
    () => ({
      count,
      isRunning,
      start: (cb?: () => any) => {
        clearInterval(timer.current)
        setCount(maxTime)
        setRunning(true)

        timer.current = setInterval(() => {
          setCount(preCount => {
            if (preCount <= 1) {
              clearInterval(timer.current)
              timer.current = null
              setRunning(false)
              if (typeof cb === 'function') cb()
            }
            return preCount - 1
          })
        }, 1000)
      },
      stop: () => clearInterval(timer.current),
    }),
    [count, isRunning, maxTime],
  )
}
