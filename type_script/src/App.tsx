import React from 'react';
import Todos from "./components/Todo/Todos";
import Todo from "./modeles/todo";

function App() {
  const items = [
    new Todo('task1'),
    new Todo('task2')
  ]
  return <Todos items={items} />;
}

export default App;