import { NavLink, useRouteLoaderData } from "react-router-dom";

import classes from "./EventsNavigation.module.css";

function EventsNavigation() {
    // Pull the auth Token from the root loader
    const token = useRouteLoaderData("root");

    return (
        <header className={classes.header}>
            {token && (
                <nav>
                    <ul className={classes.list}>
                        <li>
                            <NavLink
                                to="/events"
                                className={({ isActive }) =>
                                    isActive ? classes.active : undefined
                                }
                                end
                            >
                                All Events
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/events/new"
                                className={({ isActive }) =>
                                    isActive ? classes.active : undefined
                                }
                            >
                                New Event
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}

export default EventsNavigation;
