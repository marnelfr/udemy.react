import classes from './EventItem.module.css';
import {Link, useNavigate, useSubmit} from "react-router-dom";


function EventItem({ event }) {
  const submit = useSubmit()

  function startDeleteHandler() {
    const proceed = window.confirm(`Sure... You want to deleted the event ${event.title}?`)
    if(proceed) {
      submit(null, {method: 'DELETE'})
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
