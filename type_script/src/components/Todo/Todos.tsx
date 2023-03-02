import {FC} from "react";

import Todo from "../../modeles/todo";
import TodoItem from "../TodoItem/TodoItem";
import classes from './Todos.module.css'

const Todos: FC<{items: Todo[], onRemoveTodo: (id: number) => void}> = (props) => {

    const clickHandler = (id: number) => {
      props.onRemoveTodo(id)
    }

    return (
        <ul className={classes.todos}>
            {props.items.map(item => <TodoItem
                onClick={clickHandler.bind(null, item.id)}
                key={item.id} text={item.text}
            />)}
        </ul>
    )
}

export default Todos
