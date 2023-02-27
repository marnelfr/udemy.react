import EventsList from "../components/EventsList";
import {json, useLoaderData} from "react-router-dom";

export const eventsLoader = async () => {
  const response = await fetch('http://localhost:8080/events')
  if(!response.ok) {
    throw json({message: 'Can not load events data'}, {status: 500})
  }
  return response
}

const EventsPage = () => {
  const data = useLoaderData()
  return (
    <EventsList events={data.events} />
  )
}

export default EventsPage
