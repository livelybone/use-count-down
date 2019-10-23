declare function useCountDown(
  maxTime?: number,
): {
  count: number
  isRunning: boolean
  start: (cb?: (() => any) | undefined) => void
  stop: () => void
}

export default useCountDown
