import {Outlet} from "react-router-dom";
import EventsNavigation from "../../../components/Section20.2/correction/EventsNavigation";

const EventRootLayout = () => {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  )
}

export default EventRootLayout
