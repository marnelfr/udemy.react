import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Layouts/Root";
import HomePage from "./pages/Home";
import EventLayout from "./pages/Layouts/Event";
import EventsPage, { EventsLoader } from "./pages/Events";
import NewEventPage from "./pages/NewEvent";
import EventDetailPage, { eventDetailLoader } from "./pages/EventDetail";
import EditEventPage from "./pages/EditEvent";

import "./App.css";
import EventsList from "./components/EventsList/EventsList";
import { eventItemAction } from "./components/EventItem/EventItem";

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
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: EventsLoader,
          },
          { path: "new", element: <NewEventPage /> },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: eventItemAction,
              },
              { path: "edit", element: <EditEventPage /> },
            ],
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
