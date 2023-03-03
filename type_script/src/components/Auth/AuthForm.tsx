import classes from "./AuthForm.module.css";
import {
  Form,
  Link,
  useActionData,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";
import { useEffect } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export interface ErrorType {
  message: string;
  errors: string[];
}

interface SuccessType {
  message: string;
  user: {};
  token: string;
}

function AuthForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const actionData = useActionData() as ErrorType | SuccessType;

  const isLogin = searchParams.get("mode") === "login";

  useEffect(() => {
    if (actionData && "token" in actionData) {
      dispatch(authActions.setToken(actionData.token));
      navigate("/events");
    }
  }, [dispatch, navigate, actionData]);

  return (
    <>
      {actionData && "errors" in actionData && (
        <ErrorMessage data={actionData} />
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
