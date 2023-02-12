import React, {useContext, useEffect, useReducer, useRef} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from "../../../store/Section10/auth-context";
import Input from "../../UI/Input/Input";

const reducer = (state, action) => {
  if (action.type === 'CHECK_FORM') {
    const isValidForm = state.email.includes('@') && state.password.trim().length > 6
    return {...state, isValidForm}
  }
  if (action.type === 'USERNAME_CHANGED') {
    return {...state, email: action.value, isValidEmail: action.value.includes('@')}
  }
  if (action.type === 'PASSWORD_CHANGED') {
    return {...state, password: action.value, isValidPassword: action.value.trim().length > 6}
  }
  if (action.type === 'CHECK_EMAIL') {
    const isValidEmail = state.email.includes('@')
    return {...state, isValidEmail}
  }
  if (action.type === 'CHECK_PASSWORD') {
    const isValidPassword = state.password.trim().length > 6
    return {...state, isValidPassword}
  }
  return {
    email: '',
    isValidEmail: null,
    password: '',
    isValidPassword: null,
    isValidForm: false
  }
}

const Login = (props) => {
  const authCtx = useContext(AuthContext)
  const [state, dispatch] = useReducer(reducer, {
    email: '',
    isValidEmail: null,
    password: '',
    isValidPassword: null,
    isValidForm: false
  })
  const emailInpRef = useRef()
  const passwordInpRef = useRef()
  
  const {isValidEmail: validEmail, isValidPassword: validPass} = state

  useEffect(() => {
    const timeOutID = setTimeout(() => dispatch({type: 'CHECK_FORM'}), 500)
    return () => clearTimeout(timeOutID)
  }, [validPass, validEmail])

  const emailChangeHandler = (event) => dispatch(
    {type: 'USERNAME_CHANGED', value: event.target.value}
  );

  const passwordChangeHandler = (event) => dispatch(
    {type: 'PASSWORD_CHANGED', value: event.target.value}
  );

  const validateEmailHandler = () => dispatch({type: 'CHECK_EMAIL'});

  const validatePasswordHandler = () => dispatch({type: 'CHECK_PASSWORD'});

  const submitHandler = (event) => {
    event.preventDefault();
    if(state.isValidForm) {
      authCtx.loginHandler(state.email, state.password);
    } else if(!validEmail) {
      emailInpRef.current.focus()
    } else {
      passwordInpRef.current.focus()
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInpRef}
          label="E-Mail"
          isValid={state.isValidEmail}
          type="email"
          id="email"
          value={state.email}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordInpRef}
          label="Password"
          isValid={state.isValidPassword}
          type="password"
          id="password"
          value={state.password}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
