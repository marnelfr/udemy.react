import styles from './Checkout.module.css'
import Input from "../../UI/Input/Input";
import {useCallback, useState} from "react";
import useInput from "../../../hooks/use-input";

const Checkout = (props) => {
  const {
    value: nameValue, inpHasError: nameInpHasError, valueIsValid: nameValueIsValid,
    changeHandler: nameChangeHandler, blurHandler: nameBlurHandler
  } = useInput((val) => val.trim() !== '')
  const {
    value: streetValue, inpHasError: streetInpHasError, valueIsValid: streetValueIsValid,
    changeHandler: streetChangeHandler, blurHandler: streetBlurHandler
  } = useInput((val) => val.trim() !== '')
  const {
    value: cityValue, inpHasError: cityInpHasError, valueIsValid: cityValueIsValid,
    changeHandler: cityChangeHandler, blurHandler: cityBlurHandler
  } = useInput((val) => val.trim() !== '')
  const {
    value: emailValue, inpHasError: emailInpHasError, valueIsValid: emailValueIsValid,
    changeHandler: emailChangeHandler, blurHandler: emailBlurHandler
  } = useInput((val) => val.trim().includes('@') && val.trim().length > 4)

  const formIsValid = nameValueIsValid && streetValueIsValid && cityValueIsValid && emailValueIsValid

  const submitHandler = event => {
    event.preventDefault()

    nameBlurHandler()
    emailBlurHandler()
    cityBlurHandler()
    streetBlurHandler()

    if(!formIsValid) {
      return
    }

    const customer = {nameValue, streetValue, cityValue, emailValue}
    props.onSubmit(customer)
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={styles['control-group']}>
        <Input
          label="Your name"
          id="name"
          type="text"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={nameValue}
          errorMessage={nameInpHasError ? 'Please enter a valid name' : ''}
        />
        <Input
          label="Street"
          id="street"
          type="text"
          onChange={streetChangeHandler}
          onBlur={streetBlurHandler}
          value={streetValue}
          errorMessage={streetInpHasError ? 'Please enter a valid street' : ''}
        />
      </div>
      <div className={styles['control-group']}>
        <Input
          label="City"
          id="city"
          type="text"
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
          value={cityValue}
          errorMessage={cityInpHasError ? 'Please enter a valid city' : ''}
        />
        <Input
          label="Email"
          id="email"
          type="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailValue}
          errorMessage={emailInpHasError ? 'Please enter a valid email' : ''}
        />
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={props.onHideForm} className={styles['button--alt']}>Cancel</button>
        <button>{props.isLoading ? 'Submitting...' : 'Submit'}</button>
      </div>
    </form>
  );
};

export default Checkout;
