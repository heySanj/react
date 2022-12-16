import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

// Material UI
import { Container, CssBaseline } from "@mui/material";

import UserForm from "./components/NewUser/UserForm";
import UserList from "./components/List/UserList";

function App() {
  
    const [users, setUsers] = useState([]);

    const addUserHandler = (user) => {
        // Add the new user onto the list after spreading the previous users
        setUsers((prevUsers) => {
            return [user, ...prevUsers];
        });
    };

    let content = (
      <p style={{ textAlign: 'center', color: 'white' }}>No users found. Maybe add one?</p>
    );

    if (users.length > 0) {
      content = (
        <UserList items={users} />
      );
    }

    return (
        <div className="App">
            <CssBaseline />
            <Container maxWidth="md">
                <UserForm onSaveData={addUserHandler} />
                {content}
            </Container>
        </div>
    );
}

export default App;
