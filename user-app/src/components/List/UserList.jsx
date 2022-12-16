import React, { useState } from "react";
import { Card, CardContent, Box } from "@mui/material";

const UserList = (props) => {

    return (
        <Card sx={{ mt: 5 }}>
            <CardContent>
                <Box sx={{ mt: 1 }}>
                    <ul className="expenses-list">
                        {
                            //Create a component for each item in expenses
                            props.items.map((user) => (
                                <li key={user.id}>
                                    {user.name} - {user.age}
                                </li>
                            ))
                        }
                    </ul>
                </Box>
            </CardContent>
        </Card>
    );
};

export default UserList;
