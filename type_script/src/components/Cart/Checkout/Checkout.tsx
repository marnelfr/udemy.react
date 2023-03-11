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
        <div
          className={`${styles["form-control"]} ${
            nameHasError ? styles.invalid : undefined
          }`}
        >
          <label htmlFor="name">Your name</label>
          <input
            value={nameValue}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            type="text"
            id="name"
          />
          {nameHasError && (
            <p className={styles["error-text"]}>Please enter a valid value</p>
          )}
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="name">Street</label>
          <input type="text" id="street" />
        </div>
        {/*<div className={styles["form-control"] + " " + styles.invalid}>
          <label htmlFor="name">Street</label>
          <input type="text" id="name" />
          <p className={styles["error-text"]}>Please enter a valid value</p>
        </div>*/}
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
