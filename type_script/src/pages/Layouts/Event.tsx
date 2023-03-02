import EventsNavigation from "../../components/EventsNavigation/EventsNavigation";
import {Outlet} from "react-router-dom";

const EventLayout = () => {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  )
}

export default EventLayout
