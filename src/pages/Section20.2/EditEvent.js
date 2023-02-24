import EventForm from "../../components/Section20.2/EventForm";
import {useRouteLoaderData} from "react-router-dom";

const EditEventPage = () => {
  const data = useRouteLoaderData('event-detail')
  return <EventForm event={data.event} />
}

export default EditEventPage
