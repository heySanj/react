import { redirect } from "react-router-dom";

export const getTokenDuration = () => {
    const storedExpirationDate = localStorage.getItem('expiration')
    const expirationDate = new Date(storedExpirationDate)
    const now = new Date();
    const duration = expirationDate.getTime() - now.getTime();

    return duration;
}

// Function that will retrieve the login token from the browser local storage
export const getAuthToken = () => {
    const token = localStorage.getItem("token");

    if(!token){
        return null;
    }

    const tokenDuration = getTokenDuration()

    if (tokenDuration < 0) {
        return 'EXPIRED'
    }

    return token;
};

// Loader that provides the token --> To be used on the root layout so that all routes have access to it!
export const tokenLoader = () => {
    return getAuthToken();
};

// Loader that only provides access to a route if the user is logged in --> otherwise they are redirected
export const checkAuthLoader = () => {
    const token = getAuthToken();

    // Redirect if not logged in
    if(!token){
        return redirect('/auth')
    }

    // Otherwise return null
    return null;
}