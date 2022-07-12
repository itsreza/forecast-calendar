import React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import MaterialDialog from "@mui/material/Dialog";
import DialogActions from '@mui/material/DialogActions';

export default function Dialog({ title , isOpen, onClose, children , actionsComponent}) {
  return (
    <MaterialDialog onClose={onClose} open={isOpen}>
      <DialogTitle>{title}</DialogTitle>
      {children}
       <DialogActions>
        {actionsComponent}
        </DialogActions>
    </MaterialDialog>
  );
}
