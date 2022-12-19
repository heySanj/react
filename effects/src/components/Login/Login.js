import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";


const loginReducer = (prevState, action) => {
  const newState = {...prevState}

  if (action.type === "USER_INPUT_EMAIL") {
      newState.email = action.val;
      newState.emailValid = action.val.includes("@");
  }

  if (action.type === "USER_INPUT_PASS") {
      newState.pass = action.val;
      newState.passValid = action.val.trim().length > 6;
  }

  if (action.type === "INPUT_BLUR") {
      newState.emailValid = prevState.email.includes("@");
      newState.passValid = prevState.pass.trim().length > 6;
  }

  return newState;
};

const Login = (props) => {
    const [formIsValid, setFormIsValid] = useState(false);

    // const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: false })
    const [loginState, dispatchLogin] = useReducer(loginReducer, {
        email: "",
        emailValid: false,
        pass: "",
        passValid: false,
    });

    // ==================================================================================================

    useEffect(() => {
        // Only execute this function after a 500ms delay
        // IF the user types anything else, this timer will be cleared due to the cleanup function
        // and the timer will restart; useful for limiting the frequency of function calls
        const timerID = setTimeout(() => {
            setFormIsValid(loginState.emailValid && loginState.passValid);
        }, 200);

        // Returning from useEffect has to be a function --> a cleanup function
        // The cleanup function actually runs BEFORE the rest of the useEffect function (except for the FIRST time)
        // The cleanup function also runs when this element is removed from the DOM
        return () => {
            clearTimeout(timerID); // Clear the last timer if it has not yet executed
        };
    }, [ loginState.emailValid, loginState.passValid ]); // Only run this effect if ANY of these dependancies change

    // ==================================================================================================

    const emailChangeHandler = (event) => {
        dispatchLogin({ type: "USER_INPUT_EMAIL", val: event.target.value });
    };

    const passwordChangeHandler = (event) => {
        dispatchLogin({ type: "USER_INPUT_PASS", val: event.target.value });
    };

    const validateEmailHandler = () => {
        dispatchLogin({ type: "INPUT_BLUR" });
    };

    const validatePasswordHandler = () => {
        dispatchLogin({ type: "INPUT_BLUR" });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.onLogin(loginState.email, loginState.pass);
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div
                    className={`${classes.control} ${
                        loginState.emailValid === false ? classes.invalid : ""
                    }`}
                >
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        value={loginState.email}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div
                    className={`${classes.control} ${
                        loginState.passValid === false ? classes.invalid : ""
                    }`}
                >
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={loginState.pass}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>
                <div className={classes.actions}>
                    <Button
                        type="submit"
                        className={classes.btn}
                        disabled={!formIsValid}
                    >
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
