import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import Meal from "../../../modeles/meal";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { cartActions } from "../../../redux/cart";
import { MAX_ITEM_PER_MEAL } from "../../../redux/cart";

const MealItem: React.FC<{ meal: Meal }> = ({ meal }) => {
  const items = useAppSelector((state) => state.cart.items);
  const item = items.find((item) => item.meal.id === meal.id);
  const price = meal.price.toFixed(2);
  const dispatch = useAppDispatch();

  const isPushable = item ? item.amount < MAX_ITEM_PER_MEAL : true;

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
        <MealItemForm isPushable={isPushable} onAddItem={addItemHandler} />
      </div>
    </li>
  );
};

export default MealItem;
