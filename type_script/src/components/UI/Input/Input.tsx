import styles from "./Input.module.css";
import React, { ChangeEventHandler, FocusEventHandler } from "react";

const Input: React.FC<{
  value: string;
  hasError: boolean;
  changeHandler: ChangeEventHandler;
  blurHandler: FocusEventHandler;
}> = (props) => {
  return (
    <div
      className={`${styles["form-control"]} ${
        props.hasError ? styles.invalid : undefined
      }`}
    >
      <label htmlFor="name">Your name</label>
      <input
        value={props.value}
        onChange={props.changeHandler}
        onBlur={props.blurHandler}
        type="text"
        id="name"
      />
      {props.hasError && (
        <p className={styles["error-text"]}>Please enter a valid value</p>
      )}
    </div>
  );
};

export default Input;
