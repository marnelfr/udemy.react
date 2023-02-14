import Card from './Card';
import useCounter from "../../hooks/use-counter";

const ForwardCounter = () => {
  const counter = useCounter(0, 1, 1000);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
