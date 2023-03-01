import React from 'react';
import Todos from "./components/Todo/Todos";
import Todo from "./modeles/todo";
import NewTodo from "./components/NewTodo/NewTodo";

function App() {
  const items = [
    new Todo('task1'),
    new Todo('task2')
  ]

  const newTodoHandler = (text: string) => {

  }

  return (
    <>
      <NewTodo onNewTodo={newTodoHandler} />
      <Todos items={items} />
    </>
  )
}

export default App;