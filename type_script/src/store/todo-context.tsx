import React, {ReactNode, useState} from "react";
import Todo from "../modeles/todo";

type Created = {
    items: Todo[];
    addTodo: (todo: Todo) => void;
    removeTodo: (id: number) => void;
};

const TodoContext = React.createContext<Created>({
    items: [],
    addTodo: (todo) => {},
    removeTodo: (id) => {}
})

export const TodoContextProvider: React.FC<{children: ReactNode}> = (props) => {
    const [items, setItems] = useState<Todo[]>([])

    const addTodo = (todo: Todo) => setItems(items => items.concat(todo))

    const removeTodo = (id: number) => setItems(items => items.filter(item => item.id !== id))

    return (
        <TodoContext.Provider value={{items, addTodo, removeTodo}}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoContext