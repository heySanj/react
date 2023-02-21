// import { useState } from "react";

import useInput from "../hooks/use-input";

const SimpleInput = (props) => {

    // Name input
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangedHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput,
    } = useInput((value) => value.trim() !== "");

    // Email input
    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangedHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInput(validateEmail);

    function validateEmail(email) {
        if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(email)) {
            return true;
        }
        return false;
    }

    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }


    const formSubmissionHandler = (event) => {
        event.preventDefault(); // Prevent the HTTP request being sent on form submission

        // Validation
        if (!enteredNameIsValid) {
            return;
        }

        console.log(enteredName, enteredEmail);

        resetNameInput();
        resetEmailInput();
    };

    const nameInputClasses = nameInputHasError
        ? "form-control invalid"
        : "form-control";

    const emailInputClasses = emailInputHasError
        ? "form-control invalid"
        : "form-control";

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={nameChangedHandler}
                    onBlur={nameBlurHandler}
                    value={enteredName}
                />
                {nameInputHasError && (
                    <p className="error-text">Name must be valid</p>
                )}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="name"
                    onChange={emailChangedHandler}
                    onBlur={emailBlurHandler}
                    value={enteredEmail}
                />
                {emailInputHasError && (
                    <p className="error-text">Email must be valid</p>
                )}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
