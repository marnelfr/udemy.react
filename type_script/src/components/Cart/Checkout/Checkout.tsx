import styles from "./Checkout.module.css";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  FocusEventHandler,
  FormEventHandler,
  MouseEventHandler,
  useCallback,
  useState,
} from "react";
import useInput from "../../../hooks/use-input";
import Input from "../../UI/Input/Input";

const Checkout: React.FC<{ onCancel: MouseEventHandler }> = ({ onCancel }) => {
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    changeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
    hasBeenTouched: nameHasBeenTouched,
  } = useInput((val) => val.trim() !== "");
  const {
    value: streetValue,
    isValid: streetIsValid,
    hasError: streetHasError,
    changeHandler: streetChangeHandler,
    blurHandler: streetBlurHandler,
    hasBeenTouched: streetHasBeenTouched,
  } = useInput((val) => val.trim() !== "");
  const {
    value: cityValue,
    isValid: cityIsValid,
    hasError: cityHasError,
    changeHandler: cityChangeHandler,
    blurHandler: cityBlurHandler,
    hasBeenTouched: cityHasBeenTouched,
  } = useInput((val) => val.trim() !== "");
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    hasBeenTouched: emailHasBeenTouched,
  } = useInput((val) => val.trim() !== "");

  const clickHandler: MouseEventHandler = useCallback(
    (event) => {
      onCancel(event);
    },
    [onCancel]
  );

  const submitHandler: FormEventHandler = (event) => {
    event.preventDefault();

    nameHasBeenTouched();
    streetHasBeenTouched();
    cityHasBeenTouched();
    emailHasBeenTouched();

    if (nameIsValid && streetIsValid && cityIsValid && emailIsValid) {
      console.log("okook");
    } else {
      console.log("error");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles["control-group"]}>
        <Input
          name="Your name"
          value={nameValue}
          hasError={nameHasError}
          changeHandler={nameChangeHandler}
          blurHandler={nameBlurHandler}
        />
        <Input
          name="Street"
          value={streetValue}
          hasError={streetHasError}
          changeHandler={streetChangeHandler}
          blurHandler={streetBlurHandler}
        />
      </div>
      <div className={styles["control-group"]}>
        <Input
          name="City"
          value={cityValue}
          hasError={cityHasError}
          changeHandler={cityChangeHandler}
          blurHandler={cityBlurHandler}
        />
        <Input
          name="Email"
          value={emailValue}
          hasError={emailHasError}
          changeHandler={emailChangeHandler}
          blurHandler={emailBlurHandler}
        />
      </div>
      <div className={styles.actions}>
        <button onClick={clickHandler} className={styles["button--alt"]}>
          Cancel
        </button>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default Checkout;
