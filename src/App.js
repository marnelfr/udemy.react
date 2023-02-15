import React, { useEffect, useState } from 'react';

import Tasks from './components/Section15.2/Tasks/Tasks';
import NewTask from './components/Section15.2/NewTask/NewTask';
import useFetch from "./hooks/use-fetch";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, error, fetchData] = useFetch('https://udemy-react-a7270-default-rtdb.firebaseio.com/tasks.json')

  const fetchTasks = async () => {
      const loadedTasks = [];
      const data = await fetchData();

      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }

      setTasks(loadedTasks);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
