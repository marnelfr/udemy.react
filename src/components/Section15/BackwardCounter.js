import Card from './Card';
import useCounter from "../../hooks/use-counter";



const BackwardCounter = () => {
  const counter = useCounter(0, -1, 1000)

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
