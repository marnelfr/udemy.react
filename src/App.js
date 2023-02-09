import styles from './App.module.css'
import Form from "./components/Section8/Form/Form";
import CourseGoalItem from "./components/CourseGoals/CourseGoalItem/CourseGoalItem";
import React from "react";
import Modal from "./components/Section8/Modal/Modal";

const App = () => {

  return (
    /**/
    <div>
      <Form/>
      <section id={styles.card}>
        <ul className={styles['user-list']}>
          <li className={styles['user-item']}>
            je ne suis là
          </li>
        </ul>
      </section>
      <Modal />
    </div>
  )
}

export default App