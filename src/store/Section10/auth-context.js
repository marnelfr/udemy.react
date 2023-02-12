import React, {useEffect, useState} from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  loginHandler: (email, password) => {
  },
  logoutHandler: () => {
  }
})

export const AuthContextProvider = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const isAlreadyLoggedIn = localStorage.getItem('IsLoggedIn') === '1'
    if (isAlreadyLoggedIn) {
      setIsLoggedIn(true)
    }
  }, [])

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyway
    localStorage.setItem('IsLoggedIn', '1')
    setIsLoggedIn(true)
  }

  const logoutHandler = () => {
    localStorage.removeItem('IsLoggedIn')
    setIsLoggedIn(false)
  }

  return <AuthContext.Provider value={{isLoggedIn, logoutHandler, loginHandler}}>
    {props.children}
  </AuthContext.Provider>
}

export default AuthContext