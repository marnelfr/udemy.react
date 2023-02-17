import useInput from "../../../../hooks/use-input";
import Input from "../../../Section16/UI/Input";

import styles from './Form.module.css'

const ValidateNotEmptyValue = val => val.trim() !== ''
const ValidateEmailValue = val => val.includes('@')

const Form = (props) => {
  const {
    value: enteredName,
    valueIsValid: enteredNameIsValid,
    inputIsInvalid: nameInputIsInvalid,
    changeHandler: nameInputChangeHandler,
    blurHandler: nameInputBlurHandler,
    reset: resetNameInput
  } = useInput(ValidateNotEmptyValue)

  const {
    value: enteredLastName,
    valueIsValid: enteredLastNameIsValid,
    inputIsInvalid: lastNameInputIsInvalid,
    changeHandler: lastNameInputChangeHandler,
    blurHandler: lastNameInputBlurHandler,
    reset: resetLastNameInput
  } = useInput(ValidateNotEmptyValue)

  const {
    value: enteredEmail,
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

    props.onOrderSubmitted({
      name: enteredName, email: enteredEmail, lastname: enteredLastName
    })

    resetNameInput()
    resetEmailInput()
    resetLastNameInput()
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={styles['control-group']}>
        <Input
          name="Name"
          id="name"
          type="text"
          className={`${styles['form-control']} ${nameInputIsInvalid ? styles.invalid : ''}`}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
          hasError={nameInputIsInvalid}
          errorMessage="Name can't be empty."
          errorClass={styles['error-text']}
        />
        <Input
          name="Last Name"
          id="lastname"
          type="text"
          className={`${styles['form-control']} ${lastNameInputIsInvalid ? styles.invalid : ''}`}
          onChange={lastNameInputChangeHandler}
          onBlur={lastNameInputBlurHandler}
          value={enteredLastName}
          hasError={lastNameInputIsInvalid}
          errorMessage="Last name can't be empty."
          errorClass={styles['error-text']}
        />
      </div>
      <Input
        name="E-Mail Address"
        id="email"
        type="text"
        className={`${styles['form-control']} ${emailInputIsInvalid ? styles.invalid : ''}`}
        onChange={emailInputChangeHandler}
        onBlur={emailInputBlurHandler}
        value={enteredEmail}
        hasError={emailInputIsInvalid}
        errorMessage="Provide a valid email."
        errorClass={styles['error-text']}
      />

      <div className={styles.actions}>
        <button onClick={props.onCancel} className={styles['button--alt']}>Cancel</button>
        <button disabled={!formIsValid} className={styles.button}>Submit</button>
      </div>
    </form>
  );
};

export default Form;
