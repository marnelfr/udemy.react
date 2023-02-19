import {useCallback, useState} from "react";

const useInput = (validator) => {
  const [value, setValue] = useState('')
  const [isTouched, setIsTouched] = useState(false)

  const valueIsValid = validator(value)
  const inpHasError = !valueIsValid && isTouched

  const changeHandler = useCallback(event => {
    setValue(event.target.value)
  }, [])

  const blurHandler = useCallback(() => {
    setIsTouched(true)
  }, [])

  return {
    value,
    valueIsValid,
    inpHasError,
    changeHandler,
    blurHandler
  }
}

export default useInput