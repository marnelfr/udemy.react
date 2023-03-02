import EventForm from "../components/EventForm/EventForm";
import {
  ActionFunction,
  json,
  redirect,
  useRouteLoaderData,
} from "react-router-dom";
import Event from "../modeles/Event";

export const editEventAction: ActionFunction = async ({ request, params }) => {
  const data = await request.formData();
  const event = {
    title: data.get("title"),
    image: data.get("image"),
    description: data.get("description"),
    date: data.get("date"),
  };

  const response = await fetch(
    "http://localhost:8080/events/" + params.eventId,
    {
      method: request.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    }
  );

  if (!response.ok) {
    throw json({ message: "Can not update event!" }, { status: 500 });
  }

  return redirect("..");
};

const EditEventPage = () => {
  const event = useRouteLoaderData("event-detail") as Event;
  return <EventForm method="patch" event={event} />;
};

export default EditEventPage;
