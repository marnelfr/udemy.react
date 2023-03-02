import Event from "../modeles/Event";
import EventsList from "../components/EventsList/EventsList";

const DUMMY_EVENTS = [
  new Event(
    'Event test',
    'https://media.istockphoto.com/id/499517325/photo/a-man-speaking-at-a-business-conference.jpg?s=612x612&w=0&k=20&c=gWTTDs_Hl6AEGOunoQ2LsjrcTJkknf9G8BGqsywyEtE=',
    'Portez ce vieux whisky au juge blond qui fume',
    '2022-03-12',
    null
  ),
  new Event(
    'Event test',
    'https://cdn.pixabay.com/photo/2017/12/08/11/53/event-party-3005668__340.jpg',
    'Portez ce vieux whisky au juge blond qui fume',
    '2022-03-12',
    null
  ),
]

const EventsPage = () => {
  return <EventsList events={DUMMY_EVENTS} />
}

export default EventsPage
