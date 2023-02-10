import React, {useEffect, useReducer, useState} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const reducer = (state, action) => {
  if (action.type === 'CHECK_FORM') {
    const isValidFrom = state.email.includes('@') && state.password.trim().length > 6
    return {...state, isValidFrom}
  }
  if (action.type === 'USERNAME_CHANGED') {
    return {...state, email: action.value}
  }
  if (action.type === 'PASSWORD_CHANGED') {
    return {...state, password: action.value}
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
    isValidFrom: false
  }
}

const Login = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    email: '',
    isValidEmail: null,
    password: '',
    isValidPassword: null,
    isValidFrom: false
  })

  useEffect(() => {
    const timeOutID = setTimeout(() => dispatch({type: 'CHECK_FORM'}), 200)
    return () => clearTimeout(timeOutID)
  }, [state])

  const emailChangeHandler = (event) => {
    dispatch({type: 'USERNAME_CHANGED', value: event.target.value})
  };

  const passwordChangeHandler = (event) => {
    dispatch({type: 'PASSWORD_CHANGED', value: event.target.value})
  };

  const validateEmailHandler = () => {
    dispatch({type: 'CHECK_EMAIL'})
  };

  const validatePasswordHandler = () => {
    dispatch({type: 'CHECK_PASSWORD'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(state.email, state.password);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            state.isValidEmail === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={state.email}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            state.isValidPassword === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={state.password}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!state.isValidFrom}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
