import React, {useState} from 'react';
import Todos from "./components/Todo/Todos";
import Todo from "./modeles/todo";
import NewTodo from "./components/NewTodo/NewTodo";

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([])


  const newTodoHandler = (text: string) => {
    const todo = new Todo(text)
    setTodoList(list => list.concat(todo))
  }

  return (
    <>
      <NewTodo onNewTodo={newTodoHandler} />
      <Todos items={todoList} />
    </>
  )
}

export default App;