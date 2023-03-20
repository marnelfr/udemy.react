import Input from "../UI/Input/Input";
import useInput from "../../hooks/use-input";
import styles from "./Auth.module.css";
import {
  FormEventHandler,
  MouseEventHandler,
  useCallback,
  useEffect,
} from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loginUser, logoutUser } from "../../thunks/auth";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const auth = useAppSelector((state) => {
    return {
      isLoggedIn: state.auth.isLoggedIn,
      name: state.auth.name,
      email: state.auth.email,
    };
  });

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
      if (emailIsValid && passwordIsValid) {
        dispatch(loginUser(emailValue, passwordValue));
      }
    },
    [dispatch, emailIsValid, emailValue, passwordIsValid, passwordValue]
  );

  const logoutHandler: MouseEventHandler = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(logoutUser());
    },
    [dispatch]
  );

  useEffect(() => {
    if (auth.isLoggedIn) {
      navigate("/admin");
    }
  }, [auth.isLoggedIn, navigate]);

  if (auth.isLoggedIn) {
    return (
      <div>
        <h2>You are logged is as</h2>
        <p>{auth.name}</p>
        <small>{auth.email}</small>
        <div className={styles.logout}>
          <button onClick={logoutHandler}>Logout</button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <Input
        name="Email"
        value={emailValue}
        hasError={emailHasError}
        type="email"
        changeHandler={emailChangeHandler}
        blurHandler={emailBlurHandler}
      />
      <Input
        name="Password"
        value={passwordValue}
        type="password"
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
