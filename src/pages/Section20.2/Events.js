import EventsList from "../../components/Section20.2/EventsList";

const DUMMY_EVENTS = [
  { id: 'ev1', image: 'https://via.placeholder.com/200', title: 'Event 1', date: '05-02-2023' },
  { id: 'ev2', image: 'https://via.placeholder.com/200', title: 'Event 2', date: '25-02-2023' },
  { id: 'ev3', image: 'https://via.placeholder.com/200', title: 'Event 3', date: '02-03-2023' },
]

const EventsPage = () => {
  return (
    <>
      <EventsList events={DUMMY_EVENTS} />
    </>
  )
}

export default EventsPage
