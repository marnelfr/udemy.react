import { json, LoaderFunction, useLoaderData } from "react-router-dom";

import Event from "../modeles/Event";
import EventsList from "../components/EventsList/EventsList";

export interface EventType {
  id: string;
  title: string;
  image: string;
  description: string;
  date: string;
}

export const eventsLoader: LoaderFunction = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json({ message: "Can not load events data" }, { status: 500 });
  }

  const data = await response.json();
  return data.events.map(
    (event: EventType) =>
      new Event(
        event.title,
        event.image,
        event.description,
        event.date,
        event.id
      )
  );
};

const EventsPage = () => {
  const events = useLoaderData() as Event[];
  return <EventsList events={events} />;
};

export default EventsPage;
