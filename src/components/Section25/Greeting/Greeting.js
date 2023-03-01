import {useState} from "react";

const Greeting = () => {
  const [text, setText] = useState('Happy to see you!')

  const clickHandler = () => setText('Changed!')

  return (
    <>
      <h2>Hello World!</h2>
      <p>{text}</p>
      <button onClick={clickHandler}>Click me!</button>
    </>
  )
}

export default Greeting
