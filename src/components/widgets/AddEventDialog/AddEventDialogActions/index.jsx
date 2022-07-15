import React from "react";
import { useDispatch } from "react-redux";
import { addNewEventRequested } from "../../../../store/actions/eventActions";
import Button from "../../../UI/Button";

export default function AddEventDialogActions({ onAfterSubmit, eventDetail }) {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(addNewEventRequested(eventDetail));
    onAfterSubmit?.();
  };
  return <Button onClick={onClick}>Submit Event</Button>;
}
