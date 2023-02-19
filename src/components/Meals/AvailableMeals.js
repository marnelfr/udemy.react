import Card from "../UI/Card/Card";
import MealItem from "./MealItem/MealItem";

import styles from './AvailableMeals.module.css'
import {useEffect, useState} from "react";
import useFetch from "../../hooks/use-fetch";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([])
  const {isLoading, error, sendRequest} = useFetch()

  const getter = (data) => {
    const loadedMeals = []
    for (const key in data) {
      loadedMeals.push({
        id: key,
        ...data[key]
      })
    }
    setMeals(loadedMeals)
  }

  useEffect(() => {
    sendRequest('https://udemy-react-a7270-default-rtdb.firebaseio.com/meals/availableMeals.json', getter)
  }, [sendRequest])

  const mealList = meals.map(meal => <MealItem key={meal.id} {...meal} />)

  return (
    <section className={styles.meals}>
      <Card>
        {!isLoading && !error && mealList}
        {isLoading && <p className={styles.message}>Loading...</p>}
        {!isLoading && error && <p className={styles.message + ' ' + styles.invalid}>{error}</p>}
      </Card>
    </section>
  )
}

export default AvailableMeals