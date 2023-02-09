import React, {useState} from 'react';

import Button from '../../UI/Button/Button';
import styles from './Form.module.css'

const Form = props => {
  const [enteredValue, setEnteredValue] = useState('');


  return (
    <section id={styles['card-form']}>
      <form className={styles.form}>
        <div className={`${styles['form-control']}`}>
          <label>Username</label>
          <input type="text" value={enteredValue} />
        </div>
        <div className={`${styles['form-control']}`}>
          <label>Age (Years)</label>
          <input type="text" value={enteredValue} />
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </section>
  );
};

export default Form;
