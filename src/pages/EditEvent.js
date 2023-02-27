import EventForm from "../components/EventForm";
import {json, redirect, useRouteLoaderData} from "react-router-dom";
import {getAuthToken} from "../util/auth";

export const editEventAction = async ({request, params}) => {
  const data = await request.formData()
  const event = {
    title: data.get('title'),
    image: data.get('image'),
    description: data.get('description'),
    date: data.get('date')
  }
  const token = getAuthToken()
  const response = await fetch('http://localhost:8080/events/' + params.eventId, {
    method: request.method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify(event)
  })
  if(response.status === 422) {
    return response
  }
  if(!response.ok) {
    throw json({message: 'Can not update the event!'}, {status: 500})
  }
  return redirect('..')
}

const EditEventPage = () => {
  const { event } = useRouteLoaderData('event-item')

  return <EventForm method="patch" event={event} />
}

export default EditEventPage
