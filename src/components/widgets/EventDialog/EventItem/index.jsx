import React from "react";
import { useDispatch } from "react-redux";
import { removeEventRequested } from "../../../../store/actions/eventActions";
import classes from "./index.module.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

export default function EventItem({ title, description, id }) {
  const dispatch = useDispatch();

  const onRemove = () => dispatch(removeEventRequested(id));

  return (
    <div className={classes.event_item}>
      <div className={classes.event_item_info}>
        <span className={classes.title}>{title}</span>
        <span className={classes.description}>{description}</span>
      </div>
      <IconButton className={classes.delete_button} onClick={onRemove}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
}
