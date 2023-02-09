import styles from './App.module.css'
import Form from "./components/Section8/Form/Form";
import CourseGoalItem from "./components/CourseGoals/CourseGoalItem/CourseGoalItem";
import React from "react";

const App = () => {

  return (
    /*<div style={{position: 'absolute', width: '100vw', height: '100vh', background: 'rgba(2,2,2,0.54)'}}>
      <div style={{background: 'white', marginTop: '30vh', marginLeft: '30vw', width: '40vw'}}>
        <div style={{background: 'rgba(42,76,79,0.54)', padding: '5px 10px'}}>
          title
        </div>
        <div style={{padding: '10px'}}>
          The content of the modal
        </div>
        <div style={{textAlign: "center", padding: '15px'}}>
          <button>Ok</button>
        </div>
      </div>
    </div>*/
    <div>
      <Form/>
      <section id={styles.card}>
        <ul className={styles['user-list']}>
          <li className={styles['user-item']}>
            je ne suis là
          </li>
        </ul>
      </section>

    </div>
  )
}

export default App