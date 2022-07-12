import React from "react";
import { useDispatch } from "react-redux";
import { removeEventRequested } from "../../store/actions/eventActions";
import classes from "./index.module.scss";
export default function EventItem({ title, description, id }) {
  const dispatch = useDispatch();

  const onRemove = () => dispatch(removeEventRequested(id));

  return (
    <div className={classes.event_item}>
      <div className={classes.event_item_info}>
        <span>{title}</span>
        <span>{description}</span>
      </div>
      <button onClick={onRemove}>removeEventRequested(key)</button>
    </div>
  );
}
