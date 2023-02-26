import classes from './EventsNavigation.module.css';
import {NavLink, useRouteLoaderData} from "react-router-dom";
import {useCallback} from "react";

function EventsNavigation() {
  const token = useRouteLoaderData('root')
  const isActiveHandler = useCallback(({isActive}) => isActive ? classes.active : undefined, [])

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/events" end className={isActiveHandler}>All Events</NavLink>
          </li>
          {token && (
            <li>
              <NavLink to="/events/new" className={isActiveHandler}>New Event</NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
