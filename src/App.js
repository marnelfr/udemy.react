import React, {useEffect, useState} from 'react';

import Login from './components/section10/Login/Login';
import Home from './components/section10/Home/Home';
import MainHeader from './components/section10/MainHeader/MainHeader';

function App() {
  console.log(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(2);
  useEffect(() => {
    const isAlreadyLoggedIn = localStorage.getItem('IsLoggedIn') === '1'
    console.log(3);
    if(isAlreadyLoggedIn) {
        setIsLoggedIn(true)
    }
  }, [])
  console.log(4);
  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('IsLoggedIn', '1')
    setIsLoggedIn(true);
  };
  console.log(5);
  const logoutHandler = () => {
    localStorage.removeItem('IsLoggedIn')
    setIsLoggedIn(false);
  };
console.log(6);
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
