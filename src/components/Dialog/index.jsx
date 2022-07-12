import React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import MaterialDialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import classes from "./index.module.scss";
export default function Dialog({
  title,
  isOpen,
  onClose,
  children,
  actionsComponent,
}) {
  return (
    <MaterialDialog className={classes.dialog} onClose={onClose} open={isOpen}>
      <DialogTitle className={classes.dialog_header}>
        {title}
        <IconButton
          aria-label="close"
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      {children}
      <DialogActions className={classes.dialog_actions}>{actionsComponent}</DialogActions>
    </MaterialDialog>
  );
}
