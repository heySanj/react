import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Root layout
import RootLayout from "./pages/Root";

// Pages
import HomePage from "./pages/HomePage";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
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
                        loader: eventsLoader // Loader functions are executed first, before the element is rendered
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
