import styles from "./MealItemFrom.module.css";

const MealItemForm: React.FC = (props) => {
  return (
    <form className={styles.form}>
      <div className={styles.input}>
        <label htmlFor="meal">Amount</label>
        <input type="number" defaultValue="1" />
      </div>
      <button>+ Add</button>
      {/*<p>Please enter a valid amount.</p>*/}
    </form>
  );
};

export default MealItemForm;
