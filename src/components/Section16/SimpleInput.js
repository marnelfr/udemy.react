import { useState } from 'react';
import useInput from "../../hooks/use-input";
import Input from "./UI/Input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    classes: nameInputClasses,
    valueIsValid: enteredNameIsValid,
    inputIsInvalid: nameInputIsInvalid,
    changeHandler: nameInputChangeHandler,
    blurHandler: nameInputBlurHandler,
    reset: resetNameInput
  } = useInput(val => val.trim() !== '')

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  let enteredEmailIsValid = false;
  if(enteredEmail.trim().length > 4) {
    enteredEmailIsValid = enteredEmail.includes('@')
  }
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  const formIsValid = enteredNameIsValid && enteredEmailIsValid;


  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    nameInputBlurHandler();
    setEnteredEmailTouched(true);

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    console.log(enteredName, enteredEmail);

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    resetNameInput()
    setEnteredEmail('');
    setEnteredEmailTouched(false);
  };

  // const nameInputClasses = nameInputIsInvalid
  //   ? 'form-control invalid'
  //   : 'form-control';
  const emailInputClasses = emailInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <Input
        name="Your Name"
        id="name"
        type="text"
        className={nameInputClasses}
        onChange={nameInputChangeHandler}
        onBlur={nameInputBlurHandler}
        value={enteredName}
        hasError={nameInputIsInvalid}
        errorMessage="Name must not be empty."
      />
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input
          type='text'
          id='email'
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
          <p className='error-text'>Email must not be empty.</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
