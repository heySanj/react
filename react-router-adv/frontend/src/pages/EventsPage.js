import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
    {
        id: "e1",
        name: "Fish & Produce Market Day",
        description: "Finest fish and veggies",
        date: "19th September",
    },
    {
        id: "e2",
        name: "Oktoberfest",
        description: "A german specialty!",
        date: "3rd October",
    },
    {
        id: "e3",
        name: "Southern BBQ Day",
        description: "American, raw, meaty",
        date: "14th October",
    },
    {
        id: "e4",
        name: "Salad Making Class",
        description: "Healthy...and green...",
        date: "12th November",
    },
];

const EventsPage = () => {
    return (
        <>
            <h1>📅 Events Page</h1>
            <ul>
                {DUMMY_EVENTS.map(event => {
                    return <li key={event.id}><Link to={`/events/${event.name}`}>{event.name}</Link></li>
                })}
            </ul>
            <p>
                Go to <Link to="/">Home</Link>
            </p>
        </>
    );
};

export default EventsPage;
