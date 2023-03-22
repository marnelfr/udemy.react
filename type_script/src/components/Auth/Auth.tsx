import Input from "../UI/Input/Input";
import useInput from "../../hooks/use-input";
import styles from "./Auth.module.css";
import { FormEventHandler, MouseEventHandler, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loginUser } from "../../thunks/auth";

const Auth = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);

  const {
    value: emailValue,
    hasError: emailHasError,
    isValid: emailIsValid,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
  } = useInput((val) => val.includes("@") && val.length > 5);
  const {
    value: passwordValue,
    hasError: passwordHasError,
    isValid: passwordIsValid,
    changeHandler: passwordChangeHandler,
    blurHandler: passwordBlurHandler,
  } = useInput((val) => val.trim() !== "");

  const submitHandler: FormEventHandler = useCallback(
    (event) => {
      event.preventDefault();
      if (passwordIsValid && emailIsValid) {
        dispatch(loginUser(emailValue, passwordValue));
      }
    },
    [dispatch, passwordValue, emailValue, passwordIsValid, emailIsValid]
  );

  if (auth.isLoggedIn) {
    return (
      <>
        <div>
          <h2>You are logged in as</h2>
          <p>{auth.name}</p>
          <small>{auth.email}</small>
        </div>
        <div className={styles.logout}>
          <button>Logout</button>
        </div>
      </>
    );
  }

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <Input
        name="Email"
        value={emailValue}
        hasError={emailHasError}
        changeHandler={emailChangeHandler}
        blurHandler={emailBlurHandler}
      />
      <Input
        name="Password"
        value={passwordValue}
        hasError={passwordHasError}
        changeHandler={passwordChangeHandler}
        blurHandler={passwordBlurHandler}
      />
      <div className={styles.action}>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default Auth;
