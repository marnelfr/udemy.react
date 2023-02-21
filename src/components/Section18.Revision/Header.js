import classes from './Header.module.css';
import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import {authActions} from "../../store/Section18.Revision/auth";

const Header = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const dispatch = useDispatch()

  const logoutHandler = useCallback(event => {
    event.preventDefault()
    dispatch(authActions.logout())
  }, [dispatch])

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isLoggedIn && (
        <nav>
          <ul>
            <li>
              <a href='/Users/marnel/Developer/reload/public'>My Products</a>
            </li>
            <li>
              <a href='/Users/marnel/Developer/reload/public'>My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
