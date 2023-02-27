import EventForm from "../components/EventForm";
import {useRouteLoaderData} from "react-router-dom";

const EditEventPage = () => {
  const { event } = useRouteLoaderData('event-item')

  return <EventForm method="patch" event={event} />
}

export default EditEventPage
