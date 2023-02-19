import Card from "../UI/Card/Card";
import MealItem from "./MealItem/MealItem";

import styles from './AvailableMeals.module.css'
import {useEffect, useState} from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([])

  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('https://udemy-react-a7270-default-rtdb.firebaseio.com/meals/availableMeals.json')
      .then(response => {
        return response.json()
      })
      .then(data => {
        const loadedMeals = []
        for (const key in data) {
          loadedMeals.push({
            id: key,
            ...data[key]
          })
        }
        setMeals(loadedMeals)
        setIsLoading(false)
        setError('')
      })
      .catch(error => {
        setIsLoading(false)
        setError('Error while loading data...')
      })
  }, [])

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