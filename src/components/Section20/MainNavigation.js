import {Link, NavLink} from "react-router-dom";

import classes from './MainNavigation.module.css'
import {useCallback} from "react";

const MainNavigation = () => {
  const activeHandler = useCallback(({isActive}) => isActive ? classes.active : undefined, [])

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li><NavLink to={'/'} end className={activeHandler}>Home</NavLink></li>
          <li><NavLink to={'/products'} className={activeHandler}>Products</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
