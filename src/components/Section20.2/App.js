import {createBrowserRouter, RouterProvider} from "react-router-dom";

import RootLayout from "../../pages/Section20.2/Layout/Root";
import HomePage from "../../pages/Section20.2/Home";
import EventsPage, {eventLoader} from "../../pages/Section20.2/Events";
import EventDetailPage, {eventItemAction, eventItemLoader} from "../../pages/Section20.2/EventDetail";
import NewEventPage from "../../pages/Section20.2/NewEvent";
import EditEventPage from "../../pages/Section20.2/EditEvent";

import './App.css'
import EventRootLayout from "../../pages/Section20.2/Layout/EventRoot";
import ErrorPage from "../../pages/Section20.2/Error";
import {cruEventAction} from "./EventForm";
import NewsletterPage, {newsletterAction} from "../../pages/Section20.2/Newsletter";
import AuthenticationPage, {authAction} from "../../pages/Section20.2/Authentication";
import {logoutAction} from "../../pages/Section20.2/Logout";
import {checkAuthLoader, tokenLoader} from "../../util/Section20.2/auth";

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
    id: 'root',
    loader: tokenLoader,
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
              { path: 'edit', element: <EditEventPage />, action: cruEventAction, loader: checkAuthLoader },
            ]
          },
          { path: 'new', element: <NewEventPage />, action: cruEventAction, loader: checkAuthLoader },
        ]
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
      {
        path: 'auth',
        element: <AuthenticationPage />,
        action: authAction
      },
      {
        path: 'logout',
        action: logoutAction
      }
    ]
  }
])


function DeferredApp() {
  return <RouterProvider router={route} />;
}

export default DeferredApp;
