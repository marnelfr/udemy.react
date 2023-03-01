import {FC} from "react";

const Todo: FC<{items: string[]}> = (props) => {
    return (
        <ul>
            {props.items.map(item => <li key={item}>{item}</li>)}
        </ul>
    )
}

export default Todo
