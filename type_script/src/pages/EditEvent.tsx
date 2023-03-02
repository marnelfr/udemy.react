import EventForm from "../components/EventForm/EventForm";
import {
  ActionFunction,
  json,
  redirect,
  useRouteLoaderData,
} from "react-router-dom";
import Event from "../modeles/Event";

const EditEventPage = () => {
  const event = useRouteLoaderData("event-detail") as Event;
  return <EventForm method="patch" event={event} />;
};

export default EditEventPage;
