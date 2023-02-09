import styles from './App.module.css'
import Form from "./components/Section8/Form/Form";
import CourseGoalItem from "./components/CourseGoals/CourseGoalItem/CourseGoalItem";
import React, {useState} from "react";
import Modal from "./components/Section8/Modal/Modal";

const App = () => {
  const [showModal, setShowModal] = useState(false)
  const [error, setError] = useState('')

  const closeModalHandler = () => {
    setShowModal(false)
  }

  const formErrorHandler = message => {
    setError(message)
    setShowModal(true)
  }

  const newUserHandler = data => {

  }

  return (
    <div>
      <Form onFormError={formErrorHandler} onNewUser={newUserHandler}/>
      <section id={styles.card}>
        <ul className={styles['user-list']}>
          <li className={styles['user-item']}>
            je ne suis là
          </li>
        </ul>
      </section>
      {showModal && <Modal message={error} onClose={closeModalHandler} />}
    </div>
  )
}

export default App