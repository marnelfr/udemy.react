import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import { useCallback } from "react";
import NewsletterSignup from "../Newsletter/NewsletterSignup";

function MainNavigation() {
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
            <NavLink to="/" end className={isActiveHandler}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/events" className={isActiveHandler}>
              Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/newsletter">Newsletter</NavLink>
          </li>
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
}

export default MainNavigation;
