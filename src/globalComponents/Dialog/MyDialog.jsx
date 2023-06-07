import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

function MyDialog({ title = "Thông báo", message, handleClose = null, handleAccept }) {
  return (
    <Dialog
      open={true}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {handleClose && <Button onClick={handleClose}>Hủy</Button>}
        <Button onClick={handleAccept} autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default MyDialog;
