import {
    Link,
    useRouteLoaderData,
    json,
    redirect,
    defer,
    Await,
} from "react-router-dom";
import { Suspense } from "react";

import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";

const EventDetailPage = () => {
    // const params = useParams()
    const { event, events } = useRouteLoaderData("event-detail");

    return (
        <>
            <Suspense
                fallback={<p style={{ textAlign: "center" }}>Loading...</p>}
            >
                <Await resolve={event}>
                    {(loadedEvent) => <EventItem event={loadedEvent} />}
                </Await>
            </Suspense>
            
            <p style={{ opacity: "0.1" }}>_________________________________________________________________</p>

            <Suspense
                fallback={<p style={{ textAlign: "center" }}>Loading...</p>}
            >
                <Await resolve={events}>
                    {(loadedEvents) => <EventsList events={loadedEvents} />}
                </Await>
            </Suspense>

            <p>
                <Link to=".." relative="path">
                    Go back
                </Link>
            </p>
        </>
    );
};

export default EventDetailPage;

// ====================================================================

const loadEvent = async (eventID) => {

    const id = eventID; // params are passed through to the loader function as well

    const response = await fetch("http://localhost:8080/events/" + id);

    if (!response.ok) {
        return json(
            { message: "Could not fetch details for selected event." },
            { status: 500 }
        );
    } else {
        const resData = await response.json();
        return resData.event;
    }
};

const loadEvents = async () => {
    const response = await fetch("http://localhost:8080/events");

    if (!response.ok) {

        return json({ message: "Could not fetch events." }, { status: 500 }); // When throwing an Error, React-router will render the closest Error element
    } else {
        const resData = await response.json();
        return resData.events;
    }
};

// ==================================================================

export const loader = async ({ request, params }) => {
    const id = params.eventID; // params are passed through to the loader function as well

    return defer({
        event: await loadEvent(id), // setting await makes sure the data is loaded BEFORE the page is switched to
        events: loadEvents(),
    });
};
export const deleteEvent = async ({ request, params }) => {
    const id = params.eventID;

    const response = await fetch("http://localhost:8080/events/" + id, {
        method: request.method, // Dynamically pull the method from the request (you rely on the incoming request to have the correct data)
    });

    if (!response.ok) {
        throw json({ message: "Could not delete event." }, { status: 500 });
    }

    return redirect("/events");
};

// export const loader = async ({request, params}) => {

//     const id = params.eventID // params are passed through to the loader function as well

//     const response = await fetch('http://localhost:8080/events/' + id)

//     if (!response.ok){
//         return json({ message: 'Could not fetch details for selected event.'}, { status: 500 })
//     } else {
//         return response
//     }

// }
