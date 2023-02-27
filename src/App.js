import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/Home";
import EventsPage, {eventsLoader} from "./pages/Events";
import EventDetailPage, {deleteEventAction, eventItemLoader} from "./pages/EventDetail";
import NewEventPage, {newEventAction} from "./pages/NewEvent";
import EditEventPage, {editEventAction} from "./pages/EditEvent";
import RootLayout from "./pages/Layouts/Root";
import EventRootLayout from "./pages/Layouts/EventRoot";
import ErrorPage from "./pages/Error";
import NewsletterPage, {newsletterAction} from "./pages/Newsletter";
import AuthenticationPage, {authAction} from "./pages/Authentication";
import {logoutAction} from "./pages/Logout";
import {checkAuthLoader} from "./pages/Login";

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

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    loader: checkAuthLoader,
    id: 'root',
    children: [
      {index: true, element: <HomePage />},
      {
        path: 'events',
        element: <EventRootLayout />,
        children: [
          {index: true, element: <EventsPage />, loader: eventsLoader},
          {
            path: ':eventId',
            id: 'event-item',
            loader: eventItemLoader,
            children: [
              {index: true, element: <EventDetailPage />, action: deleteEventAction},
              {path: 'edit', element: <EditEventPage />, action: editEventAction}
            ]
          },
          {path: 'new', element: <NewEventPage />, action: newEventAction}
        ]
      },
      {path: 'newsletter', element: <NewsletterPage />, action: newsletterAction},
      {path: 'auth', element: <AuthenticationPage />, action: authAction},
      {path: 'logout', action: logoutAction}
    ]
  }
])


function App() {
  return <RouterProvider router={router} />;
}

export default App;
