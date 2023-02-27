import EventsList from "../components/EventsList";
import {Await, defer, json, useLoaderData} from "react-router-dom";
import {Suspense} from "react";

const loadEventData = async () => {
  const response = await fetch('http://localhost:8080/events')
  if(!response.ok) {
    throw json({message: 'Can not load events data'}, {status: 500})
  }
  const data = await response.json()
  return data.events
}

export const eventsLoader = async () => {
  return defer({
    events: loadEventData()
  })
}

const EventsPage = () => {
  const { events } = useLoaderData()
  return <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
    <Await resolve={events}>
      {loadedEvents => <EventsList events={loadedEvents} />}
    </Await>
  </Suspense>
}

export default EventsPage
