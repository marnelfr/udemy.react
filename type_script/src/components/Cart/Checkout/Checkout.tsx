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
          value={nameValue}
          hasError={nameHasError}
          changeHandler={nameChangeHandler}
          blurHandler={nameBlurHandler}
        />
        <div className={styles["form-control"]}>
          <label htmlFor="name">Street</label>
          <input type="text" id="street" />
        </div>
      </div>
      <div className={styles["control-group"]}>
        <div className={styles["form-control"]}>
          <label htmlFor="city">City</label>
          <input type="text" id="city" />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
        </div>
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
