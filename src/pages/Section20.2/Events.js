import EventsList from "../../components/Section20.2/EventsList";
import {json, useLoaderData} from "react-router-dom";


export const eventLoader = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    throw json({message: 'Could not fetch events'}, {status: 500})
  } else {
    return response
  }
}


function EventsPage() {
  const data = useLoaderData()
  const events = data.events
  return <EventsList events={events} />
}

export default EventsPage;