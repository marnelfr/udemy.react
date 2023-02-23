import EventItem from "../../components/Section20.2/EventItem";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

const EventDetailPage = () => {
  const { eventId } = useParams()
  const events = useSelector(state => state.event.events)
  const event = events.find(event => event.id === eventId)

  if(!event) {
    throw new Error('Event not found')
  }

  return <EventItem event={event} />
}

export default EventDetailPage
