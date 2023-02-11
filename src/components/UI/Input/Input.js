import React from "react";
import styles from './Input.module.css'

const Input = props => {
  const properties = {...props}

  delete properties.isValid
  delete properties.label

  return (
    <div className={`${styles.control} ${!props.isValid === false && styles.invalid}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input {...properties} />
    </div>
  )
}

export default Input