// import { useState } from 'react';
import {
    Form,
    Link,
    useSearchParams,
    useActionData,
    useNavigation,
} from "react-router-dom";

import classes from "./AuthForm.module.css";

function AuthForm() {
    //   const [isLogin, setIsLogin] = useState(true);

    //   function switchAuthHandler() {
    //     setIsLogin((isCurrentlyLogin) => !isCurrentlyLogin);
    //   }

    // Retrieve the data returned by an Action on the parent component/page
    // We expect this data to be an error code or success code
    const data = useActionData();

    // useNavigation allows us to see whether the app is currently navigating/submitting data etc.
    const navigation = useNavigation();

    // useSearchParams returns the query parameters and a function to set the query parameters
    const [searchParams] = useSearchParams();

    // GET the query parameters using the .get function
    const isLogin = searchParams.get("mode") === "login";

    const isSubmitting = navigation.state === "submitting";

    return (
        <>
            <Form method="post" className={classes.form}>
                <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
                {data && data.errors && (
                    <ul>
                        {Object.values(data.errors).map((err) => (
                            <li key={err}>{err}</li>
                        ))}
                    </ul>
                )}
                {data && data.message && <p>{data.message}</p>}
                <p>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" required />
                </p>
                <p>
                    <label htmlFor="image">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        required
                    />
                </p>
                <div className={classes.actions}>
                    <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
                        {isLogin ? "Create new user" : "Login"}
                    </Link>
                    <button disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                </div>
            </Form>
        </>
    );
}

export default AuthForm;
