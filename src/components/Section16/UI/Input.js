const Input = props => {
  return (
    <div className={props.className}>
      <label htmlFor={props.id}>{props.name}</label>
      <input
        type='text'
        id={props.id}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
      />
      {props.hasError && (
        <p className='error-text'>{props.errorMessage}</p>
      )}
    </div>
  )
}

export default Input