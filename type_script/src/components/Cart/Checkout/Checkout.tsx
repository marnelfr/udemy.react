import styles from "./Checkout.module.css";
import React from "react";

const Checkout: React.FC = (props) => {
  return (
    <form>
      <div className={styles["control-group"]}>
        <div className={styles["form-control"]}>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" />
        </div>
        <div className={styles["form-control"] + " " + styles.invalid}>
          <label htmlFor="name">Street</label>
          <input type="text" id="name" />
          <p className={styles["error-text"]}>Please enter a valid value</p>
        </div>
      </div>
      <div className={styles["control-group"]}>
        <div className={styles["form-control"]}>
          <label htmlFor="city">City</label>
          <input type="text" id="city" />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
        </div>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]}>Cancel</button>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default Checkout;
