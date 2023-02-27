import EventItem from "../components/EventItem";
import {Await, defer, json, redirect, useLoaderData, useRouteLoaderData} from "react-router-dom";
import {Suspense} from "react";
import {loadEventData} from "./Events";
import EventsList from "../components/EventsList";

const loadEventItemData = async (eventId, method) => {
  const response = await fetch('http://localhost:8080/events/' + eventId, {
    method: method
  })
  if(!response.ok) {
    throw json({message: 'Can retrieve the event having the id ' + eventId}, {status: 500})
  }
  const data = await response.json()
  return data.event
}

export const eventItemLoader = async ({request, params}) => {
  return defer({
    event: await loadEventItemData(params.eventId, request.method),
    events: loadEventData()
  })
}

export const deleteEventAction = async ({request, params}) => {
  const response = await fetch('http://localhost:8080/events/' + params.eventId, {
    method: request.method
  })
  if(!response.ok) {
    throw json({message: 'Can not delete event'}, {status: 500})
  }
  return redirect('/events')
}

const EventDetailPage = () => {
  const {event, events} = useRouteLoaderData('event-item')
  return (
    <>
      <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
        <Await resolve={event}>
          {event => <EventItem event={event} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
        <Await resolve={events}>
          {events => <EventsList events={events}/>}
        </Await>
      </Suspense>
    </>
  )
}

export default EventDetailPage
