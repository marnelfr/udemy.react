import EventForm from "../components/EventForm/EventForm";
import { ActionFunction } from "react-router-dom";

const NewEventPage = () => {
  return <EventForm method="post" />;
};

export default NewEventPage;
