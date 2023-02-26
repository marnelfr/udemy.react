import {Form, NavLink, useRouteLoaderData} from "react-router-dom";
import {useCallback} from "react";

import NewsletterSignup from './NewsletterSignup';
import styles from './MainNavigation.module.css'

const MainNavigation = () => {
  const token = useRouteLoaderData('root')
  const activeHandler = useCallback(({isActive}) => isActive ? styles.active : undefined, [])

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li><NavLink to="/" className={activeHandler}>Home</NavLink></li>
          <li><NavLink to="events" className={activeHandler}>Events</NavLink></li>
          <li><NavLink to="/newsletter" className={activeHandler}>Newsletter</NavLink></li>
          {
            token
              ? <Form action="/logout" method="POST"><button>Logout</button></Form>
              : <li><NavLink to="/auth?mode=login" className={activeHandler}>Login</NavLink></li>
          }
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  )
}

export default MainNavigation
