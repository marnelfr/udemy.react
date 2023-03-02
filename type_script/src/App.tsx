import React, {useState} from 'react';
import Todos from "./components/Todo/Todos";
import Todo from "./modeles/todo";
import NewTodo from "./components/NewTodo/NewTodo";
import {TodoContextProvider} from "./store/todo-context";

function App() {
    const [todoList, setTodoList] = useState<Todo[]>([])

    const removeTodoHandler = (id: number) => {
      setTodoList((list) => {
        return list.filter(todo => todo.id !== id)
      })
    }

    const newTodoHandler = (text: string) => {
        const todo = new Todo(text)
        setTodoList(list => list.concat(todo))
    }

    return (
        <TodoContextProvider>
            <NewTodo />
            <Todos />
        </TodoContextProvider>
    )
}

export default App;