import {createBrowserRouter, RouterProvider} from "react-router-dom";

import RootLayout from "./pages/Section20.2/Layout/Root";
import HomePage from "./pages/Section20.2/Home";
import EventsPage from "./pages/Section20.2/Events";
import EventDetailPage from "./pages/Section20.2/EventDetail";
import NewEventPage from "./pages/Section20.2/NewEvent";
import EditEventPage from "./pages/Section20.2/EditEvent";

import './App.css'
import ErrorPage from "./pages/Section20.2/Error";
import EventLayout from "./pages/Section20.2/Layout/Event";
import {useEffect} from "react";
import {fetchEventData} from "./store/Section20/event-actions";
import {useDispatch} from "react-redux";

// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

const route = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventLayout />,
        children: [
          { index: true, element: <EventsPage /> },
          { path: ':eventId', element: <EventDetailPage />, errorElement: <ErrorPage message="Event not found" /> },
          { path: 'new', element: <NewEventPage /> },
          { path: ':eventId/edit', element: <EditEventPage /> }
        ]
      },
    ]
  }
])


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchEventData())
  }, [dispatch, fetchEventData])

  return <RouterProvider router={route} />;
}

export default App;
