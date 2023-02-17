import styles from './AvailableMeals.module.css'
import Card from "../UI/Card/Card";
import MealItem from "./MealItem/MealItem";
import useFetch from "../hooks/use-fetch";
import {useCallback, useEffect, useState} from "react";

const AvailableMeals = () => {
  const {isLoading, error, sendRequest} = useFetch()
  const [meals, setMeals] = useState([])

  const getter = useCallback((data) => {
    const fetchedMeals = []
    for (const dataKey in data) {
      fetchedMeals.push({
        id: dataKey,
        ...data[dataKey]
      })
    }
    setMeals(fetchedMeals)
  }, [])

  useEffect(() => {
    sendRequest('https://udemy-react-a7270-default-rtdb.firebaseio.com/meals/availableMeals.json', getter)
  }, [])

  const mealsList = meals.map(meal => <MealItem
    key={meal.id}
    id={meal.id}
    name={meal.name}
    description={meal.description}
    price={meal.price}
  />)

  return (
    <section className={styles.meals}>
      <Card>
        {isLoading && <p className={styles.message}>Loading...</p>}
        {!isLoading && !error && <ul>{mealsList}</ul>}
        {error && <p className={styles.message}>{error}</p>}
      </Card>
    </section>
  )
}

export default AvailableMeals