import React, {useContext, useEffect, useState} from 'react';

import Login from './components/section10/Login/Login';
import Home from './components/section10/Home/Home';
import MainHeader from './components/section10/MainHeader/MainHeader';
import AuthContext from "./store/auth-context";

function App() {
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

export default App;
