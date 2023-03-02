import classes from "./EventItem.module.css";
import Event from "../../modeles/Event";
import { Link } from "react-router-dom";

const EventItem: React.FC<{ event: Event }> = ({ event }) => {
  function startDeleteHandler() {
    // ...
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date.toDateString()}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
};

export default EventItem;
