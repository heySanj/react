import { Link, useSubmit } from "react-router-dom";

import classes from "./EventItem.module.css";

function EventItem({ event }) {

    // useSubmit is used to programatically submit data --> use actions
    const submit = useSubmit();

    async function startDeleteHandler() {

        const proceed = window.confirm('Are you sure?')

        if(proceed){
            // useSubmit basically allows us to submit a Form programatically!!
            // The first parameter is the data you want to submit (it's NULL here because we are just deleting data)
            // The second parameter are the form options
            submit(null,{method: 'DELETE'})
        }


    }

    return (
        <article className={classes.event}>
            <img src={event.image} alt={event.title} />
            <h1>{event.title}</h1>
            <time>{event.date}</time>
            <p>{event.description}</p>
            <menu className={classes.actions}>
                <Link to="edit">Edit</Link>
                <button onClick={startDeleteHandler}>Delete</button>
            </menu>
        </article>
    );
}

export default EventItem;
