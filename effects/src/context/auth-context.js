import React, { useState, useEffect } from "react";

// create Context will return an object that contains components
const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {}, // Use dummy functions as placeholders for data to allow keys to show up in IDE
    onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Everything in a useEffect hook will be executed AFTER the component is re-evaluated, and as long
    // as the dependancies are met (and on the first run)
    useEffect(() => {
        const storedUserInfo = localStorage.getItem("isLoggedIn");
        if (storedUserInfo === "true") {
            setIsLoggedIn(true);
        }
    }, []);

    const loginHandler = (email, password) => {
        localStorage.setItem("isLoggedIn", "true"); // Store data in the browser's local storage
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler,
                onLogin: loginHandler,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
