import React, { useState } from "react";
import {
    Box,
    Button,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Alert,
} from "@mui/material";

const ErrorMessage = (props) => {
    return (
        <Box>
            <Alert variant="filled" severity="error" id="alert-dialog-title">
                {props.title}
            </Alert>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {props.message}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose} autoFocus>
                    Close
                </Button>
            </DialogActions>
        </Box>
    );
};

export default ErrorMessage;
