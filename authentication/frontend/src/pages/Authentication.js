import { json, redirect } from "react-router-dom";

import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
    return <AuthForm />;
}

export default AuthenticationPage;

export const action = async ({ request }) => {
    // Retrieve the url query parameter data through the request.url
    const searchParams = new URL(request.url).searchParams;
    const mode = searchParams.get("mode") || "login"; //get the mode from searchParams OR default to 'login'

    if (mode !== "login" && mode !== "signup") {
        throw json({ message: "Unsupported Mode" }, { status: 422 });
    }

    const data = await request.formData();
    const authData = {
        email: data.get("email"),
        password: data.get("password"),
    };

    // Send the request to the server
    const response = await fetch("http://localhost:8080/" + mode, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(authData),
    });

    // Check for any validation errors
    if (response.status === 422 || response.status === 401) {
        return response;
    }

    if (!response.ok) {
        throw json(
            { message: "Could not authenticate user!" },
            { status: 500 }
        );
    }

    // Soon: We need to manage the token returned by the server =====================

    const resData = await response.json()
    const token = resData.token

    // Set the token expiration
    const expiration = new Date()
    expiration.setHours(expiration.getHours() + 1) // a date 1 hour from now
    localStorage.setItem('expiration', expiration.toISOString())

    // Store the login token in the browser storage, so that the browser remembers you are logged in already
    localStorage.setItem('token', token)

    // ================================================================================

    return redirect('/')
};
