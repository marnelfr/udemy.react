import EventsList from "../../components/Section20.2/EventsList";
import {useLoaderData} from "react-router-dom";

function EventsPage() {
  const events = useLoaderData()
  return <EventsList events={events} />
}

export default EventsPage;