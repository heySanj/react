import useInput from "../../hooks/use-input";

import classes from "./BasicForm.module.css";

const BasicForm = (props) => {
    // ============================= INPUT SETUP ===================================

    // Name input
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangedHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput,
    } = useInput((value) => value.trim() !== "");

    // Address Input
    const {
        value: enteredAddress,
        isValid: enteredAddressIsValid,
        hasError: addressInputHasError,
        valueChangeHandler: addressChangedHandler,
        inputBlurHandler: addressBlurHandler,
        reset: resetAddressInput,
    } = useInput((value) => value.trim() !== "");

    // Email input
    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangedHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput,
    } = useInput(validateEmail);

    // ============================= VALIDATION ===================================

    function validateEmail(email) {
        if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(email)) {
            return true;
        }
        return false;
    }

    let formIsValid = false;

    if (enteredNameIsValid && enteredAddressIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    // ============================= SUBMISSION ===================================

    const formSubmissionHandler = (event) => {
        event.preventDefault(); // Prevent the HTTP request being sent on form submission

        // Validation
        if (nameInputHasError || addressInputHasError || emailInputHasError) {
            return;
        }

        // console.log(enteredName, enteredAddress, enteredEmail);
        props.submitHandler({name: enteredName, address: enteredAddress, email: enteredEmail})
        

        resetNameInput();
        resetAddressInput();
        resetEmailInput();
    };

    // ============================= CLASSES ===================================

    const inputClasses = invalid => {
        if (invalid){
            return `${classes['form-control']} ${classes['invalid']}`
        }
        return classes['form-control']
    }

    // ============================= RETURN ===================================

    return (
        <form onSubmit={formSubmissionHandler}>

            {props.hasItems && (<div className={classes['control-group']}>

                <div className={inputClasses(nameInputHasError)}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        onChange={nameChangedHandler}
                        onBlur={nameBlurHandler}
                        value={enteredName}
                    />
                    {nameInputHasError && (
                        <p className={classes['error-text']}>Name must be valid</p>
                    )}
                </div>

                <div className={inputClasses(addressInputHasError)}>
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        id="address"
                        onChange={addressChangedHandler}
                        onBlur={addressBlurHandler}
                        value={enteredAddress}
                    />
                    {addressInputHasError && (
                        <p className={classes['error-text']}>Address must be valid</p>
                    )}
                </div>

                <div className={inputClasses(emailInputHasError)}>
                <label htmlFor="email">E-Mail Address</label>
                <input
                    type="text"
                    id="email"
                    onChange={emailChangedHandler}
                    onBlur={emailBlurHandler}
                    value={enteredEmail}
                />
                {emailInputHasError && (
                    <p className={classes['error-text']}>Email must be valid</p>
                )}
            </div>

            </div>)}

                        
            <div className={props.classActions}>
                <button
                    className={props.classButtonAlt}
                    onClick={props.closeHandler}
                >
                    Close
                </button>
                {props.hasItems && (
                    <button
                        type="submit"
                        disabled={!formIsValid}
                        className={props.classButton}
                    >
                        Order
                    </button>
                )}
            </div>

        </form>
    );
};

export default BasicForm;
