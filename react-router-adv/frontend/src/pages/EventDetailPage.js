import { Link, useParams } from 'react-router-dom'

const EventDetailPage = () => {

    const params = useParams()

    return (
        <>
            <h1>🔎 Event: {params.eventID}</h1>
            <p>Cant wait for it!</p>
            <p><Link to=".." relative='path'>Go back</Link></p>
        </>
    );
};

export default EventDetailPage;
