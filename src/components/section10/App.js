import React, {useContext, useEffect, useState} from 'react';

import Login from './Login/Login';
import Home from './Home/Home';
import MainHeader from './MainHeader/MainHeader';
import AuthContext from "../../store/Section10/auth-context";

function LoginApp() {
  const context = useContext(AuthContext)
  return (
    <>
      <MainHeader/>
      <main>
        {!context.isLoggedIn && <Login />}
        {context.isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default LoginApp;
