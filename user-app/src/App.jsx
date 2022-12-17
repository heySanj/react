import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

// Material UI
import { Container, CssBaseline, Modal, Dialog } from "@mui/material";

import UserForm from "./components/NewUser/UserForm";
import UserList from "./components/List/UserList";
import ErrorMessage from "./components/UI/ErrorMessage";

function App() {
    // ==================== ERROR MODAL ========================
    const [error, setError] = useState({ open: false, title: "", message: "" });
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    const errorHandler = (e) => {
        handleOpen();
        setError(() => {
            return {
                title: e.title,
                message: e.message,
            };
        });
    };

    // =================== USER LIST ===========================
    const [users, setUsers] = useState([]);
    const addUserHandler = (user) => {
        // Add the new user onto the list after spreading the previous users
        setUsers((prevUsers) => {
            return [user, ...prevUsers];
        });
    };

    let content = (
        <p style={{ textAlign: "center", color: "white" }}>
            No users found. Maybe add one?
        </p>
    );

    if (users.length > 0) {
        content = <UserList items={users} />;
    }

    // ================== RETURN HTML ===========================
    return (
        <div className="App">
            <CssBaseline />
            <Container maxWidth="md">
                <UserForm onSaveData={addUserHandler} onError={errorHandler} />

                {content}

                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <ErrorMessage
                        title={error.title}
                        message={error.message}
                        handleClose={handleClose}
                    />
                </Dialog>
            </Container>
        </div>
    );
}

export default App;
