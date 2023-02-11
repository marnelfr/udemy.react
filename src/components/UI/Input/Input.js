import React, {useImperativeHandle, useRef} from "react";
import styles from './Input.module.css'

const Input = React.forwardRef((props, ref) => {
  const inpRef = useRef()
  const properties = {...props}

  delete properties.isValid
  delete properties.label

  const activate = () => {
    inpRef.current.focus()
  }

  useImperativeHandle(ref, () => {
    return {
      focus: activate
    }
  })

  return (
    <div className={`${styles.control} ${props.isValid === false && styles.invalid}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input ref={inpRef} {...properties} />
    </div>
  )
})

export default Input