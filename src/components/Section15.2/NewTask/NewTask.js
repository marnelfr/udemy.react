import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useFetch from "../../../hooks/use-fetch";

const NewTask = (props) => {
  const [isLoading, error, sendRequest] = useFetch('https://udemy-react-a7270-default-rtdb.firebaseio.com/')

  const enterTaskHandler = async (taskText) => {
    const data = await sendRequest('tasks.json', 'POST', taskText);

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
