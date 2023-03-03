import classes from "./AuthForm.module.css";
import { useState } from "react";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <form method="post" className={classes.form}>
        <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <button onClick={() => setIsLogin((isLogin) => !isLogin)}>
            {isLogin ? "Create new user" : "Login"}
          </button>
          <button>{`${isLogin ? "Login" : "Save"}`}</button>
        </div>
      </form>
    </>
  );
}

export default AuthForm;
