import classes from './EventsNavigation.module.css';
import {NavLink} from "react-router-dom";
import {useCallback} from "react";

function EventsNavigation() {
  const isActiveHandler = useCallback(({isActive}) => isActive ? classes.active : undefined, [])
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li><NavLink to="" end className={isActiveHandler}>All Events</NavLink></li>
          <li><NavLink to="new" className={isActiveHandler}>New Event</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
