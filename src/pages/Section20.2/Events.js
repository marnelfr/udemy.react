import EventsList from "../../components/Section20.2/EventsList";
import {useLoaderData} from "react-router-dom";


export const eventLoader = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // setError('Fetching events failed.');
  } else {
    const resData = await response.json();
    return resData.events
  }
}


function EventsPage() {
  const events = useLoaderData()
  return <EventsList events={events} />
}

export default EventsPage;