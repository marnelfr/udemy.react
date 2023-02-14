import {useEffect, useState} from "react";

const useCounter = (init, step, interval) => {
  const [count, setCount] = useState(init)

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCount((count) => count + step)
    }, interval)
    return () => clearInterval(intervalID)
  }, [step, interval])

  return count
}

export default useCounter