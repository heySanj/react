import { NavLink, Form, useRouteLoaderData } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import NewsletterSignup from "./NewsletterSignup";

function MainNavigation() {
    // Pull the auth Token from the root loader
    const token = useRouteLoaderData("root");

    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            }
                            end
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/events"
                            className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            }
                        >
                            Events
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/newsletter"
                            className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            }
                        >
                            Newsletter
                        </NavLink>
                    </li>

                    {!token && (
                        <li>
                            <NavLink
                                to="/auth?mode=login"
                                className={({ isActive }) =>
                                    isActive ? classes.active : undefined
                                }
                            >
                                Log In
                            </NavLink>
                        </li>
                    )}

                    {token && (
                        <li>
                            <Form action="/logout" method="post">
                                <button>Log Out</button>
                            </Form>
                        </li>
                    )}
                </ul>
            </nav>
            <NewsletterSignup />
        </header>
    );
}

export default MainNavigation;
