import React, { useState } from "react";
import { Card, CardContent, Button, TextField, Box } from "@mui/material";

const UserForm = (props) => {
  
    const [enteredName, setEnteredName] = useState("");
    const [enteredAge, setEnteredAge] = useState("");

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const submitHandler = (event) => {
        // Prevent the default http submission method (which causes the page to reload)
        // We will handle the submission with javascript
        event.preventDefault();

        // Check for errors
        if(!enteredName || !enteredAge || isNaN(enteredAge)){
            props.onError({
                title: "Invalid input",
                message: "Please enter a valid name and age (non-empty values)."
            })
        } else if (enteredAge < 0) {
            props.onError({
                title: "Invalid input",
                message: "Please enter a valid age (> 0)."
            })
        } else {
            // Pull the data from the state
            const userData = {
                name: enteredName,
                age: +enteredAge,
                id: Math.random().toString()
            };

            // Submit data and reset values
            props.onSaveData(userData);

            setEnteredName("");
            setEnteredAge("");
        }




    };


    return (
        <Card>
            <CardContent>
                <Box
                    component="form"
                    onSubmit={submitHandler}
                    noValidate
                    sx={{ mt: 1 }}
                >
                    <TextField
                        type="text"
                        value={enteredName}
                        onChange={nameChangeHandler}
                        label="User Name"
                        required
                        fullWidth
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        type="text"
                        value={enteredAge}
                        onChange={ageChangeHandler}
                        label="Age (Years)"
                        required
                        fullWidth
                        sx={{ mb: 2 }}
                    />
                    <div className="new-expense__actions">
                        <Button type="submit" variant="contained">
                            Add User
                        </Button>
                    </div>
                </Box>
            </CardContent>
        </Card>
    );
};

export default UserForm;
