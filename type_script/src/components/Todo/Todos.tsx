import {FC} from "react";
import Todo from "../../modeles/todo";

const Todos: FC<{items: Todo[]}> = (props) => {
    return (
        <ul>
            {props.items.map(item => <li key={item.id}>{item.text}</li>)}
        </ul>
    )
}

export default Todos
