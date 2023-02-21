import classes from './Auth.module.css';
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useRef} from "react";
import {authActions} from "../../store/Section18.Revision/auth";

const Auth = () => {
  const dispatch = useDispatch()

  const emailRef = useRef()
  const passwordRef = useRef()

  const submitHandler = useCallback(event => {
    event.preventDefault()
    const email = emailRef.current.value.trim()
    const password = passwordRef.current.value
    if(email && password) {
      dispatch(authActions.login({email, password}))
    }
  }, [dispatch])

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input ref={emailRef} type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input ref={passwordRef} type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
