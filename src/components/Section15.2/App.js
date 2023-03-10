import React, {useCallback, useEffect, useState} from 'react';

import Tasks from './Tasks/Tasks';
import NewTask from './NewTask/NewTask';
import useFetch from "../../hooks/use-fetch";

function HttpApp() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, error, sendRequest] = useFetch('https://udemy-react-a7270-default-rtdb.firebaseio.com/')

  const fetchTasks = useCallback(async () => {
    const loadedTasks = [];
    const data = await sendRequest('tasks.json');

    for (const taskKey in data) {
      loadedTasks.push({ id: taskKey, text: data[taskKey].text });
    }

    setTasks(loadedTasks);
  }, [sendRequest]);

  useEffect(() => {
    fetchTasks();
  },[fetchTasks]);

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

export default HttpApp;
