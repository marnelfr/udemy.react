import {Form, json, redirect, useActionData, useNavigate, useNavigation} from 'react-router-dom';

import classes from './EventForm.module.css';

export const cruEventAction = async ({request, params}) => {
  const data = await request.formData()
  const event = {
    title: data.get('title'),
    date: data.get('date').trim(),
    image: data.get('image'),
    description: data.get('description')
  }

  let url = 'http://localhost:8080/events';
  if(request.method === 'PATCH') {
    url += '/' + params.eventId
  }

  const response = await fetch(url, {
    method: request.method,
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


function EventForm({ method, event }) {
  const errorData = useActionData();
  const navigate = useNavigate();

  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

  function cancelHandler() {
    navigate('..');
  }

  return (
    <Form method={method} className={classes.form}>
      {errorData && errorData.errors && <ul>
        {Object.values(errorData.errors).map(error => <li key={error}>{error}</li>)}
      </ul>}
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" defaultValue={event && event.title} />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" defaultValue={event && event.image} />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" defaultValue={event && event.date} />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" defaultValue={event && event.description} rows="5" />
      </p>
      <div className={classes.actions}>
        <button type="button" disabled={isSubmitting} onClick={cancelHandler}>
          Cancel
        </button>
        <button disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Save'}</button>
      </div>
    </Form>
  );
}

export default EventForm;
