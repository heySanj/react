import { useLoaderData, json } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
    const data = useLoaderData();

    // Check for errors
    // if (data.isError){
    //     return <p>{data.message}</p>
    // }

    const events = data.events;

    return (
        <>
            <EventsList events={events} />
        </>
    );
}

export default EventsPage;

export async function loader() {
    const response = await fetch("http://localhost:8080/events");

    if (!response.ok) {
        // Deal with any errors here!

        // return {isError: true, message: 'Could not fetch events.'}

        // throw new Response(
        //     JSON.stringify({ message: "Could not fetch events." }),
        //     { status: 500 }
        // );

        return json({ message: 'Could not fetch events.'}, { status: 500 }) // When throwing an Error, React-router will render the closest Error element
        
    } else {
        // const resData = await response.json();
        // const res = new Response("any data", { status: 201 });
        return response; // Any returned data will be available within the loaded element/component
    }
}
