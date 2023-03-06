import { useLoaderData, json, defer, Await } from "react-router-dom";
import { Suspense } from "react"; // What to show while you wait for other components to load

import EventsList from "../components/EventsList";

function EventsPage() {
    const { events } = useLoaderData();

    // Check for errors
    // if (data.isError){
    //     return <p>{data.message}</p>
    // }

    // Await will wait for the resolved defer function and then render the function within itself.
    return (
        <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
            <Await resolve={events}>
                {(loadedEvents) => <EventsList events={loadedEvents} />}
            </Await>
        </Suspense>
    );
}

export default EventsPage;

const loadEvents = async () => {
    const response = await fetch("http://localhost:8080/events");

    if (!response.ok) {
        // Deal with any errors here!

        // return {isError: true, message: 'Could not fetch events.'}

        // throw new Response(
        //     JSON.stringify({ message: "Could not fetch events." }),
        //     { status: 500 }
        // );

        return json({ message: "Could not fetch events." }, { status: 500 }); // When throwing an Error, React-router will render the closest Error element
    } else {
        const resData = await response.json();
        return resData.events;
        // const res = new Response("any data", { status: 201 });
        // return response; // Any returned data will be available within the loaded element/component
    }
};

export function loader() {
    // Load up your slower functions and display when ready
    // defer takes an object with your own key/value pairs as input
    return defer({
        events: loadEvents(), // Execute your functions that may take a while to load! (this function is async and will return a PROMISE!)
    });
}

// export async function loader() {
//     const response = await fetch("http://localhost:8080/events");

//     if (!response.ok) {
//         // Deal with any errors here!

//         // return {isError: true, message: 'Could not fetch events.'}

//         // throw new Response(
//         //     JSON.stringify({ message: "Could not fetch events." }),
//         //     { status: 500 }
//         // );

//         return json({ message: 'Could not fetch events.'}, { status: 500 }) // When throwing an Error, React-router will render the closest Error element

//     } else {
//         // const resData = await response.json();
//         // const res = new Response("any data", { status: 201 });
//         return response; // Any returned data will be available within the loaded element/component
//     }
// }
