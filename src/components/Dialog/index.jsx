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
          // sx={{
          //   position: "absolute",
          //   right: 8,
          //   top: 8,
          //   color: (theme) => theme.palette.grey[500],
          // }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      {children}
      <DialogActions>{actionsComponent}</DialogActions>
    </MaterialDialog>
  );
}
