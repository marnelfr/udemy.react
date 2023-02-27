import EventItem from "../components/EventItem";
import {json, useLoaderData, useRouteLoaderData} from "react-router-dom";

export const eventItemLoader = async ({params}) => {
  const {eventId} = params
  const response = await fetch('http://localhost:8080/events/' + eventId)
  if(!response.ok) {
    throw json({message: 'Can retrieve the event having the id ' + eventId}, {status: 500})
  }
  return response
}

const EventDetailPage = () => {
  const data = useRouteLoaderData('event-item')
  return (
    <EventItem event={data.event} />
  )
}

export default EventDetailPage
