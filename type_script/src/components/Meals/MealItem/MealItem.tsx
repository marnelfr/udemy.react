import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import Meal from "../../../modeles/meal";
import { useAppDispatch } from "../../../redux/hooks";
import { cartActions } from "../../../redux/cart";

const MealItem: React.FC<{ meal: Meal }> = ({ meal }) => {
  const price = meal.price.toFixed(2);
  const dispatch = useAppDispatch();

  const addItemHandler = (amount: number) => {
    dispatch(cartActions.add({ meal, amount }));
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={styles.description}>{meal.description}</div>
        <div className={styles.price}>${price}</div>
      </div>
      <div>
        <MealItemForm onAddItem={addItemHandler} />
      </div>
    </li>
  );
};

export default MealItem;
