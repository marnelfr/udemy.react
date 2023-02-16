import {useState} from "react";

const useInput = (validator) => {
  const [value, setValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validator(value);
  const inputIsInvalid = !valueIsValid && isTouched;

  const changeHandler = (event) => {
    setValue(event.target.value);
  };

  const blurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setValue('')
    setIsTouched(false)
  }

  const classes = inputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return {
    value,
    classes,
    valueIsValid,
    inputIsInvalid,
    changeHandler,
    blurHandler,
    reset
  }
}

export default useInput