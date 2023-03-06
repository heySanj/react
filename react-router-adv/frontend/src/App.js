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

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Root layout
import RootLayout from "./pages/Root";

// Pages
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import EventsRoot from "./pages/EventsRoot";

import ErrorPage from "./pages/Error";

// Define your routes with createBrowserRouter
const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true, // Instead of a path, setting index to true will load this route when the parent route is loaded
                element: <HomePage />,
            },
            {
                path: "events",
                element: <EventsRoot />,
                children: [
                    {
                        index: true,
                        element: <EventsPage />,
                    },
                    {
                        path: ":eventID", // :dynamic --> allows for variables to be placed in URLs
                        element: <EventDetailPage />,
                    },
                    {
                        path: "new",
                        element: <NewEventPage />,
                    },
                    {
                        path: ":eventID/edit", // :dynamic --> allows for variables to be placed in URLs
                        element: <EditEventPage />,
                    },
                ],
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
