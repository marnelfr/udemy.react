import mealsImage from "../../assets/img.png";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import { NavLink } from "react-router-dom";
import { useCallback } from "react";

const Header: React.FC = (props) => {
  const isActiveHandler = useCallback(
    (state: { isActive: boolean }) =>
      state.isActive ? styles.active : undefined,
    []
  );

  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <div>
          <NavLink className={isActiveHandler} to="/">
            Home
          </NavLink>
          <NavLink className={isActiveHandler} to="our-store">
            Our Store
          </NavLink>
          <NavLink className={isActiveHandler} to="about-us">
            About us
          </NavLink>
          <NavLink className={isActiveHandler} to="login">
            Login
          </NavLink>
        </div>
        <HeaderCartButton />
      </header>
      <div className={styles.mainImage}>
        <img src={mealsImage} alt="A table full of delicious food !" />
      </div>
    </>
  );
};

export default Header;
