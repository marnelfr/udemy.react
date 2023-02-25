import {json, redirect, useRouteLoaderData} from "react-router-dom";
import EventItem from "../../components/Section20.2/EventItem";

export const eventItemLoader = async ({params}) => {
  const response = await fetch('http://localhost:8080/events/' + params.eventId)
  if(!response.ok) {
    throw json(
      {message: `Could not load the event having the id ${params.eventId}`},
      {status: 500}
    )
  }
  return response
}

export const eventItemAction = async ({request, params}) => {
  const response = await fetch('http://localhost:8080/events/' + params.eventId, {
    method: request.method
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
  const data = useRouteLoaderData('event-detail')
  return <EventItem event={data.event} />
}

export default EventDetailPage
