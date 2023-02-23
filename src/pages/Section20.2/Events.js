import EventsList from "../../components/Section20.2/EventsList";
import {useSelector} from "react-redux";

const EventsPage = () => {
  const events = useSelector(state => state.event.events)
  const filteredEvents = events.filter(event => event.isDeleted === false)
  return <EventsList events={filteredEvents} />
}

export default EventsPage
