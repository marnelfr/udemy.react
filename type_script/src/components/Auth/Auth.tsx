import Input from "../UI/Input/Input";
import useInput from "../../hooks/use-input";
import styles from "./Auth.module.css";
import { Form } from "react-router-dom";

const Auth = () => {
  const {
    value: emailValue,
    hasError: emailHasError,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
  } = useInput((val) => val.includes("@") && val.length > 5);
  const {
    value: passwordValue,
    hasError: passwordHasError,
    changeHandler: passwordChangeHandler,
    blurHandler: passwordBlurHandler,
  } = useInput((val) => val.includes("@") && val.length > 5);

  return (
    <Form className={styles.form}>
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
    </Form>
  );
};

export default Auth;
