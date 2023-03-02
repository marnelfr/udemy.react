import EventItem from "../components/EventItem/EventItem";
import { useParams } from "react-router-dom";
import Event from "../modeles/Event";

const EventDetailPage = () => {
  // const params = useParams()
  const event = new Event(
    "Event test",
    "https://media.istockphoto.com/id/499517325/photo/a-man-speaking-at-a-business-conference.jpg?s=612x612&w=0&k=20&c=gWTTDs_Hl6AEGOunoQ2LsjrcTJkknf9G8BGqsywyEtE=",
    "Portez ce vieux whisky au juge blond qui fume",
    "2022-03-12",
    null
  );
  return <EventItem event={event} />;
};

export default EventDetailPage;
