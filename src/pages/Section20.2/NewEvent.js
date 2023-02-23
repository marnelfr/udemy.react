import EventForm from "../../components/Section20.2/EventForm";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

const NewEventPage = () => {
  const event = { id: '', image: 'https://via.placeholder.com/200', title: '', date: '', description: '' }
  return <EventForm method="POST" event={event} />
}

export default NewEventPage
