import {lazy, Suspense} from "react";
import {Await, defer, json, redirect, useRouteLoaderData} from "react-router-dom";

import EventItem from "../../components/Section20.2/EventItem";
// import {loadEvents} from "./Events";
import EventsList from "../../components/Section20.2/EventsList";
import {getAuthToken} from "../../util/auth";

const loadEventItem = async id => {
  const response = await fetch('http://localhost:8080/events/' + id)
  if(!response.ok) {
    throw json(
      {message: `Could not load the event having the id ${id}`},
      {status: 500}
    )
  }
  const data = await response.json()
  return data.event
}

const loadEvents = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    throw json({message: 'Could not fetch events'}, {status: 500})
  } else {
    const data = await response.json()
    return data.events
  }
}

export const eventItemLoader = async ({params}) => {
  return defer({
    event: await loadEventItem(params.eventId),
    events: loadEvents()
  })
}

export const eventItemAction = async ({request, params}) => {
  const token = getAuthToken()
  const response = await fetch('http://localhost:8080/events/' + params.eventId, {
    method: request.method,
    headers: {
      'Authorization': 'Bearer ' + token
    }
  })
  if(!response.ok) {
    throw json(
      {message: `Could not delete the event having the id ${params.eventId}`},
      {status: 500}
    )
  }
  return redirect('/events')
}

const EventDetailPage = () => {
  const {event, events} = useRouteLoaderData('event-detail')
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={event}>
          {loadedEvent => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={events}>
          {loadedEvents => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  )
}

export default EventDetailPage
