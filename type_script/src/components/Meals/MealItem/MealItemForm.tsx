import styles from "./MealItemFrom.module.css";
import { FormEventHandler, useRef } from "react";

const MealItemForm: React.FC<{
  onAddItem: (amount: number) => void;
  isPushable: boolean;
}> = (props) => {
  const ref = useRef<HTMLInputElement>(null);

  const submitHandler: FormEventHandler = (event) => {
    event.preventDefault();
    props.onAddItem(+ref.current!.value);
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles.input}>
        <label htmlFor="meal">Amount</label>
        <input ref={ref} type="number" defaultValue="1" min="1" max="5" />
      </div>
      <button disabled={!props.isPushable}>+ Add</button>
      {!props.isPushable && <p className={styles.error}>Can't add more</p>}
      {/*<p>Please enter a valid amount.</p>*/}
    </form>
  );
};

export default MealItemForm;
