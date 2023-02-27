import {Form, useNavigate, useNavigation} from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ method, event }) {
  const navigate = useNavigate();
  const {state} = useNavigation()

  function cancelHandler() {
    navigate('..');
  }

  const isSubmitting = state === 'submitting'

  return (
    <Form method={method} className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" defaultValue={event && event.title} required />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" defaultValue={event && event.image} required />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" defaultValue={event && event.date} required />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" defaultValue={event && event.description} rows="5" required />
      </p>
      <div className={classes.actions}>
        <button disabled={isSubmitting} type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Save'}</button>
      </div>
    </Form>
  );
}

export default EventForm;
