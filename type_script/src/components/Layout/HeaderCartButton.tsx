import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton: React.FC = (props) => {
  return (
    <button className={`${styles.button} ${styles.bump}`}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>45</span>
    </button>
  );
};

export default HeaderCartButton;
