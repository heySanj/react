import { useEffect } from "react";
import { Outlet, useLoaderData, useSubmit } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import { getTokenDuration } from "../util/auth";

function RootLayout() {
    // const navigation = useNavigation();

    // Load the login token
    const token = useLoaderData();

    // programatically submit a logout form
    const submit = useSubmit();

    // Ensure the token has not expired
    useEffect(() => {
        if (!token) {
            return;
        }

        if (token === "EXPIRED") {
            submit(null, { action: "/logout", method: "post" });
            return;
        }

        const tokenDuration = getTokenDuration()
        console.log(tokenDuration)

        setTimeout(() => {
            submit(null, { action: "/logout", method: "post" });
        }, tokenDuration); // set timeout for 1 hour
    }, [token, submit]);

    return (
        <>
            <MainNavigation />
            <main>
                {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
                <Outlet />
            </main>
        </>
    );
}

export default RootLayout;
