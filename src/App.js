import React, {useEffect, useState} from 'react';

import Login from './components/section10/Login/Login';
import Home from './components/section10/Home/Home';
import MainHeader from './components/section10/MainHeader/MainHeader';
import AuthContext from "./store/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isAlreadyLoggedIn = localStorage.getItem('IsLoggedIn') === '1'
    if (isAlreadyLoggedIn) {
      setIsLoggedIn(true)
    }
  }, [])

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('IsLoggedIn', '1')
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('IsLoggedIn')
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{isLoggedIn, onLogout: logoutHandler}}>
      <MainHeader />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler}/>}
        {isLoggedIn && <Home onLogout={logoutHandler}/>}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
