import {FC, FormEvent, useRef} from "react";
import classes from './NewTodo.module.css'

const NewTodo: FC<{onNewTodo: (text: string) => void}> = (props) => {
    const inpRef = useRef<HTMLInputElement>(null)
    const submitHandler = (event: FormEvent) => {
        event.preventDefault()
        const text = inpRef.current!.value
        if(!text.trim()) {
          return;
        }
        props.onNewTodo(text)
    }
    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="todo">Todo</label>
            <input ref={inpRef} type="text" id="todo" />
            <button>Add</button>
        </form>
    )
}

export default NewTodo
