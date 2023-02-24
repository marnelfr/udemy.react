import EventsList from "../../components/Section20.2/EventsList";
import {useLoaderData} from "react-router-dom";


export const eventLoader = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    throw new Response(JSON.stringify({message: 'Cannot load data..'}), {status: 500})
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