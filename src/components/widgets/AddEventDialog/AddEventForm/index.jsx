import React from "react";
import TextField from "../../../UI/TextField";
import classes from "./index.module.scss";
export default function AddEventForm({ onBlur }) {
  return (
    <div className={classes.form_container}>
      <TextField fullWidth name="title" onBlur={onBlur} label="title" />
      <TextField
        fullWidth
        name="description"
        onBlur={onBlur}
        label="description"
      />
    </div>
  );
}
