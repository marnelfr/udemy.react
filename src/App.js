import React, { useState } from 'react';

import Login from './components/section10/Login/Login';
import Home from './components/section10/Home/Home';
import MainHeader from './components/section10/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('IsLoggedIn') === '1');

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
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
