import styles from "./Input.module.css"

const Input = props => {
  const properties = {...props}
  delete properties.label
  delete properties.errorMessage

  return (
    <div className={`${styles['form-control']} ${props.errorMessage ? styles.invalid : ''}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input {...properties}/>
      {props.errorMessage && <p className={styles['error-text']}>{props.errorMessage}</p>}
    </div>
  )
}

export default Input