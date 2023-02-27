import EventItem from "../components/EventItem";
import {json, redirect, useLoaderData, useRouteLoaderData} from "react-router-dom";

export const eventItemLoader = async ({request, params}) => {
  const {eventId} = params
  const response = await fetch('http://localhost:8080/events/' + eventId, {
    method: request.method
  })
  if(!response.ok) {
    throw json({message: 'Can retrieve the event having the id ' + eventId}, {status: 500})
  }
  return response
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
  const data = useRouteLoaderData('event-item')
  return <EventItem event={data.event} />
}

export default EventDetailPage
