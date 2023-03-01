import {FC} from "react";
import Todo from "../../modeles/todo";

const TodoItem: FC<{ text: string }> = (props) => {
    return <li>{props.text}</li>
}

export default TodoItem
