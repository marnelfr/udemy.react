import {Form, useActionData, useNavigate, useNavigation} from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ method, event }) {
  const navigate = useNavigate();
  const {state} = useNavigation()
  const actionData = useActionData()

  function cancelHandler() {
    navigate('..');
  }

  const isSubmitting = state === 'submitting'

  return (
    <>
      {actionData && actionData.message && <p style={{textAlign: 'center'}}>{actionData.message}</p>}
      {actionData && actionData.errors && <ul style={{textAlign: 'center'}}>
        {Object.values(actionData.errors).map(error => <li>{error}</li>)}
      </ul>}
      <Form method={method} className={classes.form}>
        <p>
          <label htmlFor="title">Title</label>
          <input id="title" type="text" name="title" defaultValue={event && event.title} />
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
    </>
  );
}

export default EventForm;
