import EventForm from "../../components/Section20.2/EventForm";
import {json, redirect, useRouteLoaderData} from "react-router-dom";



const NewEventPage = () => {
  return <EventForm method="POST" />
}

export default NewEventPage
