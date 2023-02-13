import React from "react";
import styles from './Input.module.css'

const Input = React.forwardRef((props, ref) => {
  const properties = {...props}

  delete properties.label
  delete properties.ref

  return (
    <div className={styles.input}>
      <label htmlFor={props.id}>{props.label}</label>
      <input ref={ref} {...properties} />
    </div>
  )
})

export default Input