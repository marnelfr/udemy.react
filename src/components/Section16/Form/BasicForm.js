import {useState} from "react";
import useInput from "../../../hooks/use-input";
import Input from "../UI/Input";

const ValidateNotEmptyValue = val => val.trim() !== ''
const ValidateEmailValue = val => val.includes('@')

const BasicForm = (props) => {
  const {
    value: enteredName,
    classes: nameInputClasses,
    valueIsValid: enteredNameIsValid,
    inputIsInvalid: nameInputIsInvalid,
    changeHandler: nameInputChangeHandler,
    blurHandler: nameInputBlurHandler,
    reset: resetNameInput
  } = useInput(ValidateNotEmptyValue)

  const {
    value: enteredLastName,
    classes: lastNameInputClasses,
    valueIsValid: enteredLastNameIsValid,
    inputIsInvalid: lastNameInputIsInvalid,
    changeHandler: lastNameInputChangeHandler,
    blurHandler: lastNameInputBlurHandler,
    reset: resetLastNameInput
  } = useInput(ValidateNotEmptyValue)

  const {
    value: enteredEmail,
    classes: emailInputClasses,
    valueIsValid: enteredEmailIsValid,
    inputIsInvalid: emailInputIsInvalid,
    changeHandler: emailInputChangeHandler,
    blurHandler: emailInputBlurHandler,
    reset: resetEmailInput
  } = useInput(ValidateEmailValue)

  const formIsValid = enteredNameIsValid && enteredEmailIsValid && enteredLastNameIsValid

  const submitHandler = event => {
    event.preventDefault()

    nameInputBlurHandler()
    lastNameInputBlurHandler()
    emailInputBlurHandler()

    console.log(enteredName, enteredEmail, enteredLastName)

    resetNameInput()
    resetEmailInput()
    resetLastNameInput()
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <Input
          name="Name"
          id="name"
          type="text"
          className={nameInputClasses}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
          hasError={nameInputIsInvalid}
          errorMessage="Name can't be empty."
        />
        <Input
          name="Last Name"
          id="lastname"
          type="text"
          className={lastNameInputClasses}
          onChange={lastNameInputChangeHandler}
          onBlur={lastNameInputBlurHandler}
          value={enteredLastName}
          hasError={lastNameInputIsInvalid}
          errorMessage="Last name can't be empty."
        />
      </div>
      <Input
        name="E-Mail Address"
        id="email"
        type="text"
        className={emailInputClasses}
        onChange={emailInputChangeHandler}
        onBlur={emailInputBlurHandler}
        value={enteredEmail}
        hasError={emailInputIsInvalid}
        errorMessage="Provide a valid email."
      />
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
