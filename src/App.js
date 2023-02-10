import styles from './App.module.css'
import Form from "./components/Section8/Form/Form";
import React, {useState} from "react";
import Modal from "./components/Section8/Modal/Modal";
import UserList from "./components/Section8/UserList/UserList";

const App = () => {
  const [error, setError] = useState('')
  const [users, setUsers] = useState([])

  const closeModalHandler = () => {
    setError('')
  }

  const formErrorHandler = message => {
    setError(message)
  }

  const newUserHandler = data => {
    setUsers(users => {
      const user = {...data, id: Math.random().toString()}
      return [user, ...users]
    })
  }

  return (
    <div>
      <Form onFormError={formErrorHandler} onNewUser={newUserHandler}/>
      <section id={styles.card}>
        <UserList users={users} />
        {users.length === 0 && <p className={styles.notFound}>No user found.</p>}
      </section>
      {error && <Modal message={error} onClose={closeModalHandler} />}
    </div>
  )
}

export default App