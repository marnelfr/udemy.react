import {useParams} from "react-router-dom";

const EventDetailPage = () => {
  const {eventId} = useParams()

  return (
    <h1>Event Detail Page {eventId}</h1>
  )
}

export default EventDetailPage
