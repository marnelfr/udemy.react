import classes from './Header.module.css';
import {useDispatch, useSelector} from "react-redux";
import {authActions} from "../../store/Section18/auth";

const Header = () => {
  const dispath = useDispatch()
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

  const logoutHandler = event => {
    event.preventDefault()
    dispath(authActions.logout())
  }

  let menu = ''
  if(isLoggedIn) {
    menu = (
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
    )
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {menu}
    </header>
  );
};

export default Header;
