import classes from "./MainNavigation.module.css";
import { Form, NavLink, useNavigate } from "react-router-dom";
import { MouseEventHandler, useCallback } from "react";
import NewsletterSignup from "../Newsletter/NewsletterSignup";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logUserOut } from "../../redux/auth/auth-actions";

function MainNavigation() {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
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
          {isLoggedIn ? (
            <Form action="/logout" method="post">
              <button type="submit">Logout</button>
            </Form>
          ) : (
            <li>
              <NavLink to="/auth?mode=login">Login</NavLink>
            </li>
          )}
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
}

export default MainNavigation;
