import {NavLink} from "react-router-dom";
import {useCallback} from "react";

import NewsletterSignup from './NewsletterSignup';
import styles from './MainNavigation.module.css'

const MainNavigation = () => {
  const activeHandler = useCallback(({isActive}) => isActive ? styles.active : undefined, [])

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li><NavLink to="/" className={activeHandler}>Home</NavLink></li>
          <li><NavLink to="events" className={activeHandler}>Events</NavLink></li>
          <li><NavLink to="/newsletter" className={activeHandler}>Newsletter</NavLink></li>
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  )
}

export default MainNavigation
