import React, {useImperativeHandle, useRef} from "react";
import styles from './Input.module.css'

const Input = React.forwardRef((props, ref) => {
  const properties = {...props}

  delete properties.isValid
  delete properties.label

  return (
    <div className={`${styles.control} ${props.isValid === false && styles.invalid}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input ref={ref} {...properties} />
    </div>
  )
})

export default Input