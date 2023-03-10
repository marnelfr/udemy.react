import mealsImage from "../../assets/img.png";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header: React.FC = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <a href="">Home</a>
        <a href="">Our Store</a>
        <a href="">About us</a>
        <a href="">Login</a>
        <HeaderCartButton />
      </header>
      <div className={styles.mainImage}>
        <img src={mealsImage} alt="A table full of delicious food !" />
      </div>
    </>
  );
};

export default Header;
