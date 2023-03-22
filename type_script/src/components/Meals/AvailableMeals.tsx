import Card from "../UI/Card/Card";
import MealItem from "./MealItem/MealItem";

import styles from "./AvailableMeals.module.css";
import { useAppSelector } from "../../redux/hooks";

const AvailableMeals: React.FC = () => {
  const meals = useAppSelector((state) => state.stock.meals);
  const mealList = meals.map((meal) => <MealItem meal={meal} key={meal.id} />);
  return (
    <section className={styles.meals}>
      <Card>{mealList}</Card>
    </section>
  );
};

export default AvailableMeals;
