import React, {useRef} from 'react';

import Button from '../../UI/Button/Button';
import styles from './Form.module.css'

const Form = props => {
  const yearInpRef = useRef()
  const usernameInpRef = useRef()

  const formHandler = event => {
    event.preventDefault()
    const data = {
      year: yearInpRef.current.value,
      username: usernameInpRef.current.value
    }
    if (data.username.trim() && Number.parseInt(data.year.trim()) > 0) {
      props.onNewUser(data)
      yearInpRef.current.value = ''
      usernameInpRef.current.value = ''
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
          <input type="text" ref={usernameInpRef}/>
        </div>
        <div className={`${styles['form-control']}`}>
          <label>Age (Years)</label>
          <input type="number" ref={yearInpRef}/>
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </section>
  );
};

export default Form;
