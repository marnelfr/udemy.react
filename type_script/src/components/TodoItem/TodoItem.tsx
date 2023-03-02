import {FC, MouseEventHandler} from "react";

import classes from './TodoItem.module.css'

const TodoItem: FC<{ text: string, onClick: () => void }> = (props) => {
    const clickHandler: MouseEventHandler<HTMLLIElement> = (event) => {
        event.preventDefault()
        props.onClick()
    }
    return <li onClick={clickHandler} className={classes.item}>{props.text}</li>
}

export default TodoItem
