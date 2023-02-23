import { useNavigate } from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ method, event }) {
  const navigate = useNavigate();
  function cancelHandler() {
    navigate('..', {relative: 'path'});
  }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" defaultValue={event.title} required />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" defaultValue={event.image} required />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" defaultValue={event.date} required />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" defaultValue={event.description} name="description" rows="5" required />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </form>
  );
}

export default EventForm;
