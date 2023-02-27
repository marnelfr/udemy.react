import EventForm from "../components/EventForm";
import {json, redirect} from "react-router-dom";
import {getAuthToken} from "../util/auth";

export const newEventAction = async ({request, params}) => {
  const data = await request.formData()
  const event = {
    title: data.get('title'),
    image: data.get('image'),
    description: data.get('description'),
    date: data.get('date')
  }

  const token = getAuthToken()
  console.log(['token', token]);

  const response = await fetch('http://localhost:8080/events', {
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
    throw json({message: 'Can not save the new event!'}, {status: 500})
  }
  return redirect('/events')
}

const NewEventPage = () => {
  return <EventForm method="post"/>
}

export default NewEventPage
