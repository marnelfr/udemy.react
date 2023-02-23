import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import EventForm from "../../components/Section20.2/EventForm";

const EditEventPage = () => {
  const {eventId} = useParams()
  const events = useSelector(state => state.event.events)
  const event = events.find(event => event.id === eventId)

  if(!event) {
    throw new Error('Event not found')
  }

  return <EventForm method="PUT" event={event} />
}

export default EditEventPage
