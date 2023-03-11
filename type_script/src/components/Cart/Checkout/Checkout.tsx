import styles from "./Checkout.module.css";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  FocusEventHandler,
  MouseEventHandler,
  useCallback,
  useState,
} from "react";
import useInput from "../../../hooks/use-input";
import Input from "../../UI/Input/Input";

const Checkout: React.FC<{ onCancel: MouseEventHandler }> = ({ onCancel }) => {
  const {
    value: nameValue,
    hasError: nameHasError,
    changeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
  } = useInput((val) => val.trim() !== "");
  const {
    value: streetValue,
    hasError: streetHasError,
    changeHandler: streetChangeHandler,
    blurHandler: streetBlurHandler,
  } = useInput((val) => val.trim() !== "");
  const {
    value: cityValue,
    hasError: cityHasError,
    changeHandler: cityChangeHandler,
    blurHandler: cityBlurHandler,
  } = useInput((val) => val.trim() !== "");
  const {
    value: emailValue,
    hasError: emailHasError,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
  } = useInput((val) => val.trim() !== "");

  const clickHandler: MouseEventHandler = useCallback(
    (event) => {
      onCancel(event);
    },
    [onCancel]
  );

  return (
    <form>
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
