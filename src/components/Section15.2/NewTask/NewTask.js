import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useFetch from "../../../hooks/use-fetch";

const NewTask = (props) => {
  const [isLoading, error, fetchData] = useFetch('https://udemy-react-a7270-default-rtdb.firebaseio.com/tasks.json', 'POST')

  const enterTaskHandler = async (taskText) => {
    const data = await fetchData(taskText);

    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
