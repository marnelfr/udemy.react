import React, {useContext} from 'react';

import classes from './Navigation.module.css';
import AuthContext from "../../../store/Section10/auth-context";

const Navigation = (props) => {
  const ctx = useContext(AuthContext)

  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/Users/marnel/Developer/reload/public">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/Users/marnel/Developer/reload/public">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.logoutHandler}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  )
};

export default Navigation;
