import classes from "./EventsNavigation.module.css";
import { NavLink } from "react-router-dom";
import { useCallback } from "react";
import { useAppSelector } from "../../redux/hooks";

function EventsNavigation() {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  const isActiveHandler = useCallback(
    (state: { isActive: boolean }) =>
      state.isActive ? classes.active : undefined,
    []
  );
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/events" end className={isActiveHandler}>
              All Events
            </NavLink>
          </li>
          {isLoggedIn && (
            <li>
              <NavLink to="/events/new" className={isActiveHandler}>
                New Event
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
