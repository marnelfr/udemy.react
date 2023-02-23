import classes from './EventItem.module.css';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useCallback} from "react";
import {eventActions} from "../../store/Section20/events-slice";

function EventItem({ event }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const startDeleteHandler = useCallback((e) => {
    e.preventDefault()
    dispatch(eventActions.delete(event.id))
    navigate('..', {relative: 'path'})
  }, [dispatch, navigate])

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
