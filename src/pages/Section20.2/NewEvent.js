import EventForm from "../../components/Section20.2/EventForm";
import {json, redirect} from "react-router-dom";

export const newEventAction = async ({request}) => {
  const data = await request.formData()
  const event = {
    title: data.get('title'),
    date: data.get('date').trim(),
    image: data.get('image'),
    description: data.get('description')
  }

  const response = await fetch('http://localhost:8080/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(event)
  })

  if(response.status === 422) {
    return response;
  }

  if(!response.ok) {
    throw json({message: 'Could not save event data'}, {
      status: 500
    })
  }
  return redirect('/events')
}

const NewEventPage = () => {
  return <EventForm />
}

export default NewEventPage
