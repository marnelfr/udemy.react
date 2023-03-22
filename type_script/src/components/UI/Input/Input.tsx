import styles from "./Input.module.css";
import React, { ChangeEventHandler, FocusEventHandler } from "react";
import { ucWord } from "../../../helpers/util";

const Input: React.FC<{
  name: string;
  value: string;
  type: string;
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
      <label htmlFor="name">{ucWord(props.name)}</label>
      <input
        value={props.value}
        onChange={props.changeHandler}
        onBlur={props.blurHandler}
        type={props.type}
        id={props.name.toLowerCase()}
      />
      {props.hasError && (
        <p className={styles["error-text"]}>Please enter a valid value</p>
      )}
    </div>
  );
};

export default Input;
