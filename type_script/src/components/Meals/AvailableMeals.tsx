import Card from "../UI/Card/Card";
import MealItem from "./MealItem/MealItem";

import styles from "./AvailableMeals.module.css";

const AvailableMeals: React.FC = () => {
  return (
    <section className={styles.meals}>
      <Card>
        <MealItem />
      </Card>
    </section>
  );
};

export default AvailableMeals;
