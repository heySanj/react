import React, { useState } from "react";
import {
    Card,
    CardContent,
    Box,
    List,
    ListItem,
    ListItemText,
    ListItemButton,
} from "@mui/material";

const UserList = (props) => {
    return (
        <Card sx={{ mt: 5 }}>
            <CardContent>
                <Box sx={{ mt: 1 }}>
                    <List>
                        {props.items.map((user) => (
                            <ListItem disablePadding key={user.id}>
                                <ListItemButton>
                                    <ListItemText primary={user.name} secondary={`(${user.age} years old)`} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </CardContent>
        </Card>
    );
};

export default UserList;
