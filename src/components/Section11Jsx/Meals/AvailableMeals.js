import Card from "../UI/Card/Card";
import MealItem from "./MealItem/MealItem";

import styles from './AvailableMeals.module.css'

const AvailableMeals = () => {
  return (
    <section className={styles.meals}>
      <Card>
        <MealItem />
      </Card>
    </section>
  )
}

export default AvailableMeals