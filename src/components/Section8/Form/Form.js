import React, {useState} from 'react';

import Button from '../../UI/Button/Button';
import styles from './Form.module.css'

const Form = props => {
  const [data, setData] = useState({username: '', year: ''});

  const usernameChangeHandler = event => {
    setData(state => ({...state, username: event.target.value}))
  }

  const yearChangeHandler = event => {
    setData(state => ({...state, year: event.target.value}))
  }

  const formHandler = event => {
    event.preventDefault()
    if (data.username.trim() && Number.parseInt(data.year.trim()) > 0) {
      props.onNewUser(data)
      setData({username: '', year: ''})
    } else if (!data.username.trim()) {
      props.onFormError('Please, enter an username')
    } else {
      props.onFormError('Please, enter a valid age')
    }
  }

  return (
    <section id={styles['card-form']}>
      <form className={styles.form} onSubmit={formHandler}>
        <div className={`${styles['form-control']}`}>
          <label>Username</label>
          <input type="text" onChange={usernameChangeHandler} value={data.username}/>
        </div>
        <div className={`${styles['form-control']}`}>
          <label>Age (Years)</label>
          <input type="number" onChange={yearChangeHandler} value={data.year}/>
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </section>
  );
};

export default Form;
