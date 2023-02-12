import styles from './Input.module.css'

const Input = props => {
  const properties = {...props}
  delete properties.label
  return (
    <div className={styles.input}>
      <label htmlFor={props.id}>{props.label}</label>
      <input {...properties} />
    </div>
  )
}

export default Input