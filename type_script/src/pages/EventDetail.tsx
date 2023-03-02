import EventItem from "../components/EventItem/EventItem";
import Event from "../modeles/Event";
import {
  useLoaderData,
  LoaderFunction,
  json,
  useRouteLoaderData,
} from "react-router-dom";
import { EventType } from "./Events";

export const eventDetailLoader: LoaderFunction = async ({ params }) => {
  const url = "http://localhost:8080/events/" + params.eventId;
  const response = await fetch(url);

  if (!response.ok) {
    throw json({ message: "Can not load event data" }, { status: 500 });
  }

  const data = await response.json();
  const event = data.event as EventType;

  return new Event(
    event.title,
    event.image,
    event.description,
    event.date,
    event.id
  );
};

const EventDetailPage = () => {
  const event = useRouteLoaderData("event-detail") as Event;
  return <EventItem event={event} />;
};

export default EventDetailPage;
