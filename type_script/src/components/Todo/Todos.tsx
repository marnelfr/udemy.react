import {FC} from "react";
import Todo from "../../modeles/todo";
import TodoItem from "../TodoItem/TodoItem";

const Todos: FC<{items: Todo[]}> = (props) => {
    return (
        <ul>
            {props.items.map(item => <TodoItem key={item.id} text={item.text}/>)}
        </ul>
    )
}

export default Todos
