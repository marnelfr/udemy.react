import {useReducer, useState} from "react";

const initialState = {value: '', isTouched: false}

const inputReducer = (state, action) => {
  if(action.type === 'CHANGE') {
    return {...state, value: action.value}
  }
  if(action.type === 'BLUR') {
    return {...state, isTouched: true}
  }
  return initialState
}

const useInput = (validator) => {
  const [{value, isTouched}, dispatch] = useReducer(inputReducer, initialState)

  const valueIsValid = validator(value);
  const inputIsInvalid = !valueIsValid && isTouched;

  const reset = () => dispatch({type: 'RESET'})
  const blurHandler = () => dispatch({type: 'BLUR'});
  const changeHandler = (event) => dispatch({type: 'CHANGE', value: event.target.value});

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