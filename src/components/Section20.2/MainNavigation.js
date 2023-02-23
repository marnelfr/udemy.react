import {NavLink} from "react-router-dom";
import {useCallback} from "react";

import styles from './MainNavigation.module.css'

const MainNavigation = () => {
  const activeHandler = useCallback(({isActive}) => isActive ? styles.active : undefined, [])

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li><NavLink to="/" className={activeHandler}>Home</NavLink></li>
          <li><NavLink to="events" className={activeHandler}>Events</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
