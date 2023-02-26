import {createBrowserRouter, RouterProvider} from "react-router-dom";

import RootLayout from "./pages/Section20.2/Layout/Root";
import HomePage from "./pages/Section20.2/Home";
import EventsPage, {eventLoader} from "./pages/Section20.2/Events";
import EventDetailPage, {eventItemAction, eventItemLoader} from "./pages/Section20.2/EventDetail";
import NewEventPage from "./pages/Section20.2/NewEvent";
import EditEventPage from "./pages/Section20.2/EditEvent";

import './App.css'
import EventRootLayout from "./pages/Section20.2/Layout/EventRoot";
import ErrorPage from "./pages/Section20.2/Error";
import {cruEventAction} from "./components/Section20.2/EventForm";
import NewsletterPage, {newsletterAction} from "./pages/Section20.2/Newsletter";
import AuthenticationPage from "./pages/Section20.2/Authentication";

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
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventRootLayout />,
        children: [
          { index: true, element: <EventsPage />, loader: eventLoader },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventItemLoader,
            children: [
              { index: true, element: <EventDetailPage />, action: eventItemAction },
              { path: 'edit', element: <EditEventPage />, action: cruEventAction },
            ]
          },
          { path: 'new', element: <NewEventPage />, action: cruEventAction },
        ]
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
      {
        path: 'auth',
        element: <AuthenticationPage />
      }
    ]
  }
])


function App() {
  return <RouterProvider router={route} />;
}

export default App;
