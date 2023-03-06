import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Root layout
import RootLayout from "./pages/Root";

// Pages
import HomePage from "./pages/HomePage";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import EventDetailPage, {
    loader as detailsLoader,
    deleteEvent as deleteEventAction,
} from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import EventsRoot from "./pages/EventsRoot";

import NewsletterPage, { action as newsletterAction } from './pages/Newsletter';

import { action as sendEventDataAction } from "./components/EventForm";
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
                        loader: eventsLoader, // Loader functions are executed first, before the element is rendered
                    },
                    {
                        path: ":eventID", // :dynamic --> allows for variables to be placed in URLs
                        id: "event-detail",
                        loader: detailsLoader, // event details will be loaded onto all child routes/pages
                        children: [
                            {
                                index: true,
                                element: <EventDetailPage />,
                                action: deleteEventAction,
                            },
                            {
                                path: "edit",
                                element: <EditEventPage />,
                                action: sendEventDataAction
                            },
                        ],
                    },

                    {
                        path: "new",
                        element: <NewEventPage />,
                        action: sendEventDataAction,
                    },
                ],
            },
            {
                path: 'newsletter',
                element: <NewsletterPage />,
                action: newsletterAction,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
