import useInput from "../../../hooks/use-input";
import Input from "../UI/Input";

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

  const {
    value: enteredEmail,
    classes: emailInputClasses,
    valueIsValid: enteredEmailIsValid,
    inputIsInvalid: emailInputIsInvalid,
    changeHandler: emailInputChangeHandler,
    blurHandler: emailInputBlurHandler,
    reset: resetEmailInput,
  } = useInput(val => val.trim().length > 4 && val.includes('@'))

  const formIsValid = enteredNameIsValid && enteredEmailIsValid;

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    nameInputBlurHandler();
    emailInputBlurHandler()

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    console.log(enteredName, enteredEmail);

    resetNameInput()
    resetEmailInput()
  };

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
      <Input
        name="Your Email"
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

export default SimpleInput;
