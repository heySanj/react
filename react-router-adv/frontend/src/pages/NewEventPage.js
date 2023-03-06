import EventForm from "../components/EventForm";

const NewEventPage = () => {
    return (
        <>
            <h1>🎇 New Event</h1>
            <EventForm method="post" />
        </>
    );
};

export default NewEventPage;

