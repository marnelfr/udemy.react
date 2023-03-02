import {
  useNavigate,
  Form,
  FormMethod,
  ActionFunction,
  json,
  redirect,
} from "react-router-dom";

import Event from "../../modeles/Event";

import classes from "./EventForm.module.css";
import { formatDate } from "../../helpers/date";

export const cruEventAction: ActionFunction = async ({ request, params }) => {
  const data = await request.formData();
  const event = {
    title: data.get("title"),
    image: data.get("image"),
    description: data.get("description"),
    date: data.get("date"),
  };

  const response = await fetch(
    "http://localhost:8080/events/" + params.eventId,
    {
      method: request.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    }
  );

  if (!response.ok) {
    throw json({ message: "Can not update event!" }, { status: 500 });
  }

  return redirect("/events");
};

const EventForm: React.FC<{ method: FormMethod; event?: Event }> = ({
  method,
  event,
}) => {
  const navigate = useNavigate();
  const date = event ? formatDate(event.date) : "";

  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form method={method} className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event && event.title}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={event && event.image}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required defaultValue={date} />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows={5}
          required
          defaultValue={event && event.description}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </Form>
  );
};

export default EventForm;
