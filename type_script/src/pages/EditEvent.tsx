import EventForm from "../components/EventForm/EventForm";
import { useRouteLoaderData } from "react-router-dom";
import Event from "../modeles/Event";

const EditEventPage = () => {
  const event = useRouteLoaderData("event-detail") as Event;
  return <EventForm method="PATCH" event={event} />;
};

export default EditEventPage;
