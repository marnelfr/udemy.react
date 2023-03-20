import Card from "../UI/Card/Card";
import MealItem from "./MealItem/MealItem";

import styles from "./AvailableMeals.module.css";
import { useAppSelector } from "../../redux/hooks";
import config from "../../utils/config";

const AvailableMeals: React.FC = () => {
  const meals = useAppSelector((state) => state.stock.meals);
  const mealList = meals.map((meal) => <MealItem meal={meal} key={meal.id} />);
  console.log(config.BACKEND_URL);
  return (
    <section className={styles.meals}>
      <Card>{mealList}</Card>
    </section>
  );
};

export default AvailableMeals;
