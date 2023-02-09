import styles from './App.module.css'
import Form from "./components/Section8/Form/Form";
import React, {useState} from "react";
import Modal from "./components/Section8/Modal/Modal";
import UserItem from "./components/Section8/UserItem/UserItem";
import UserList from "./components/Section8/UserList/UserList";

const App = () => {
  const [showModal, setShowModal] = useState(false)
  const [error, setError] = useState('')
  const [users, setUsers] = useState([])

  const closeModalHandler = () => {
    setShowModal(false)
  }

  const formErrorHandler = message => {
    setError(message)
    setShowModal(true)
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
      {showModal && <Modal message={error} onClose={closeModalHandler} />}
    </div>
  )
}

export default App