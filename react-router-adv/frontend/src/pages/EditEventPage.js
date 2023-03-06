import { useRouteLoaderData } from "react-router-dom";

import EventForm from "../components/EventForm"

const EditEventPage = () => {

    const data = useRouteLoaderData('event-detail') // Route loader Data is more specific as it allows you to tag routes and refer to them specifically

    return (
        <>
            <h1>📝 Edit Event</h1>
            <EventForm method="patch" event={data.event} />
        </>
    );
};

export default EditEventPage;
