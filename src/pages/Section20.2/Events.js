import { Suspense } from 'react'
import EventsList from "../../components/Section20.2/EventsList";
import {Await, defer, json, useLoaderData} from "react-router-dom";

export const loadEvents = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    throw json({message: 'Could not fetch events'}, {status: 500})
  } else {
    const data = await response.json()
    return data.events
  }
}

export const eventLoader = () => {
  return defer({
    events: loadEvents()
  })
}


function EventsPage() {
  const { events } = useLoaderData()
  return <Suspense fallback={<p>Loading...</p>}>
    <Await resolve={events}>
      { loadedEvents => <EventsList events={loadedEvents} /> }
    </Await>
  </Suspense>
}

export default EventsPage;