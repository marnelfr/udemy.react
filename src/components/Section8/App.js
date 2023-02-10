import styles from './App.module.css'
import Form from "./Form/Form";
import React, {useState} from "react";
import Modal from "./Modal/Modal";
import UserList from "./UserList/UserList";

const Section8App = () => {
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

export default Section8App