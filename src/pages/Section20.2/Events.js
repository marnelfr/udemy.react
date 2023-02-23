import EventsList from "../../components/Section20.2/EventsList";
import {useSelector} from "react-redux";

const EventsPage = () => {
  const events = useSelector(state => state.event.events)
  return <EventsList events={events} />
}

export default EventsPage
