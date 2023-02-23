import EventsNavigation from "../../../components/Section20.2/EventsNavigation";
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
