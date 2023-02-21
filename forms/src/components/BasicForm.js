import useInput from "../hooks/use-input";

const BasicForm = (props) => {
    // ============================= INPUT SETUP ===================================

    // First Name input
    const {
        value: enteredFirstName,
        isValid: enteredFirstNameIsValid,
        hasError: firstNameInputHasError,
        valueChangeHandler: firstNameChangedHandler,
        inputBlurHandler: firstNameBlurHandler,
        reset: resetFirstNameInput,
    } = useInput((value) => value.trim() !== "");

    // Last Name
    const {
        value: enteredLastName,
        isValid: enteredLastNameIsValid,
        hasError: lastNameInputHasError,
        valueChangeHandler: lastNameChangedHandler,
        inputBlurHandler: lastNameBlurHandler,
        reset: resetLastNameInput,
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

    if (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    // ============================= SUBMISSION ===================================

    const formSubmissionHandler = (event) => {
        event.preventDefault(); // Prevent the HTTP request being sent on form submission

        // Validation
        if (firstNameInputHasError || lastNameInputHasError || emailInputHasError) {
            return;
        }

        console.log(enteredFirstName, enteredLastName, enteredEmail);

        resetFirstNameInput();
        resetLastNameInput();
        resetEmailInput();
    };

    // ============================= CLASSES ===================================

    const inputClasses = invalid => {
        if (invalid){
            return "form-control invalid"
        }
        return "form-control"
    }

    // ============================= RETURN ===================================

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className="control-group">

                <div className={inputClasses(firstNameInputHasError)}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        onChange={firstNameChangedHandler}
                        onBlur={firstNameBlurHandler}
                        value={enteredFirstName}
                    />
                    {firstNameInputHasError && (
                        <p className="error-text">First Name must be valid</p>
                    )}
                </div>

                <div className={inputClasses(lastNameInputHasError)}>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        onChange={lastNameChangedHandler}
                        onBlur={lastNameBlurHandler}
                        value={enteredLastName}
                    />
                    {lastNameInputHasError && (
                        <p className="error-text">Last Name must be valid</p>
                    )}
                </div>
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
                    <p className="error-text">Email must be valid</p>
                )}
            </div>

            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
