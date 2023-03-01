import {FC, FormEvent, useRef} from "react";

const NewTodo: FC<{onNewTodo: (text: string) => void}> = (props) => {
    const inpRef = useRef<HTMLInputElement>(null)
    const submitHandler = (event: FormEvent) => {
        event.preventDefault()
        const text = inpRef.current!.value
        props.onNewTodo(text)
    }
    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="todo">Todo</label>
            <input ref={inpRef} type="text" id="todo" />
            <button>Add</button>
        </form>
    )
}

export default NewTodo
