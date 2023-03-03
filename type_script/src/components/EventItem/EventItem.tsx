import classes from "./EventItem.module.css";
import Event from "../../modeles/Event";
import {
  ActionFunction,
  json,
  Link,
  redirect,
  useSubmit,
} from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

export const eventItemAction: ActionFunction = async ({ params, request }) => {
  const response = await fetch(
    "http://localhost:8080/events/" + params.eventId,
    {
      method: request.method,
    }
  );
  if (!response.ok) {
    throw json({ message: "Can not delete event!" }, { status: 500 });
  }
  return redirect("/events");
};

const EventItem: React.FC<{ event: Event }> = ({ event }) => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const submit = useSubmit();
  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure ?");
    if (proceed) {
      submit(null, { method: "delete" });
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date.toDateString()}</time>
      <p>{event.description}</p>
      {isLoggedIn && (
        <menu className={classes.actions}>
          <Link to="edit">Edit</Link>
          <button onClick={startDeleteHandler}>Delete</button>
        </menu>
      )}
    </article>
  );
};

export default EventItem;
