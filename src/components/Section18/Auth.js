import classes from './Auth.module.css';
import {useDispatch, useSelector} from "react-redux";
import {useRef} from "react";
import {authActions} from "../../store/Section18/auth";

const Auth = () => {
  const dispath = useDispatch()
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

  const emailInpRef = useRef()
  const passwordInpRef = useRef()

  const submitHandler = event => {
    event.preventDefault()

    const payload = {
      email: emailInpRef.current.value.trim(),
      password: passwordInpRef.current.value.trim()
    };

    dispath(authActions.login(payload))
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input ref={emailInpRef} type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input ref={passwordInpRef} type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
