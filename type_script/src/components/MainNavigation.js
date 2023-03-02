import classes from './MainNavigation.module.css';
import {NavLink} from "react-router-dom";
import {useCallback} from "react";

function MainNavigation() {
  const isActiveHandler = useCallback(({isActive}) => isActive ? classes.active : undefined, [])

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li><NavLink to="/" end className={isActiveHandler}>Home</NavLink></li>
          <li><NavLink to="/events" className={isActiveHandler}>Events</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
