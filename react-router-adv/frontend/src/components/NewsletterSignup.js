import { useFetcher } from "react-router-dom";

import { useEffect } from "react";

import classes from "./NewsletterSignup.module.css";

function NewsletterSignup() {

    // Useful for handling form submissions that are accessed by multiple routes
    // Where the default Form and action behaviour is limited.

    // USEFUL FOR: triggering an action without navigating to where the action belongs.
    // ie: Trigger something without redirecting to another page.
    const fetcher = useFetcher()
    
    // data = the data that fetcher is handling
    // state = whether fetcher is done handling what its doing etc.
    const { data, state } = fetcher;

    useEffect(() => {
        if(state === 'idle' && data && data.message){
            window.alert(data.message)
        }
    },[data, state])

    return (
        <fetcher.Form method="post" action="/newsletter" className={classes.newsletter}>
            <input
                type="email"
                placeholder="Sign up for newsletter..."
                aria-label="Sign up for newsletter"
            />
            <button>Sign up</button>
        </fetcher.Form>
    );
}

export default NewsletterSignup;
