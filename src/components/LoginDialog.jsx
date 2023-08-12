import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";

export default function LoginDialog(props) {
  return (
    <Dialog open={props.open} maxWidth={"sm"} fullWidth>
      <DialogTitle>Login</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          label="Username"
          name="name"
          type="text"
          fullWidth
          margin="normal"
          onChange={props.handChange}
        />
        <TextField
          autoFocus
          label="Password"
          name="password"
          type="password"
          fullWidth
          margin="normal"
          onChange={props.handChange}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={props.handlogin}> Login </Button>
        <Button variant="contained" color="error" onClick={props.handCloseDialog}> Cancel </Button>
      </DialogActions>
    </Dialog>
  );
}
