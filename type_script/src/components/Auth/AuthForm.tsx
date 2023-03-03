import classes from "./AuthForm.module.css";
import { Form, Link, useActionData, useSearchParams } from "react-router-dom";

interface ErrorType {
  message: string;
  errors: string[];
}

function AuthForm() {
  const [searchParams] = useSearchParams();
  const errorData = useActionData() as ErrorType;
  const isLogin = searchParams.get("mode") === "login";

  return (
    <>
      {errorData && errorData.message && (
        <p style={{ textAlign: "center" }}>{errorData.message}</p>
      )}
      {errorData && errorData.errors && (
        <ul style={{ textAlign: "center" }}>
          {Object.values(errorData.errors).map((error) => (
            <li>{error}</li>
          ))}
        </ul>
      )}
      <Form method="post" className={classes.form}>
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
          <Link to={`/auth?mode=${isLogin ? "signup" : "login"}`}>
            {isLogin ? "Signup" : "Login"}
          </Link>
          <button>{`${isLogin ? "Login" : "Save"}`}</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
