import styles from "./MealItemFrom.module.css";
import { FormEventHandler, MouseEventHandler, useRef } from "react";

const MealItemForm: React.FC<{ onAddItem: (amount: number) => void }> = (
  props
) => {
  const ref = useRef<HTMLInputElement>(null);

  const submitHandler: FormEventHandler = (event) => {
    event.preventDefault();
    props.onAddItem(+ref.current!.value);
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles.input}>
        <label htmlFor="meal">Amount</label>
        <input ref={ref} type="number" defaultValue="1" min="1" />
      </div>
      <button>+ Add</button>
      {/*<p>Please enter a valid amount.</p>*/}
    </form>
  );
};

export default MealItemForm;
