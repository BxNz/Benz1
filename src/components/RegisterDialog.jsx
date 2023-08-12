import React from 'react'
import {
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    DialogActions,
    Button,
  } from "@mui/material";

export default function RegisterDailog(props) {
  return (
          <Dialog open={props.openregister} maxWidth={'sm'} fullWidth>
        <DialogTitle>Register</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            label="Username"
            name='name'
            type="text"
            fullWidth
            margin="normal"
            onChange={props.handChange}
          />
          <TextField
            autoFocus
            label="Password"
            name='password'
            type="password"
            fullWidth
            margin="normal"
            onChange={props.handChange}
          />
            <TextField
            autoFocus
            label="age"
            name='age'
            type="text"
            fullWidth
            margin="normal"
            onChange={props.handChange}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color='success' onClick={props.handRegister}>Create</Button>
          <Button variant="contained" color="error" onClick={props.handCloseRegister}>Cancel</Button>
        </DialogActions>
      </Dialog>
  );
}
