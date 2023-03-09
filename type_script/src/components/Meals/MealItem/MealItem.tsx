import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem: React.FC = (props) => {
  return (
    <li className={styles.meal}>
      <div>
        <h3>Meal's name</h3>
        <div className={styles.description}>Meal's description</div>
        <div className={styles.price}>15,25</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
