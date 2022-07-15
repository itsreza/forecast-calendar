import React from "react";
import Button from "../../../UI/Button";
import AddIcon from "@mui/icons-material/Add";
import { useHistory } from "react-router-dom";
import moment from "moment";
export default function EventDialogActions({ onAddEvent, selectedDate }) {
  const history = useHistory();
  return (
    <>
      <Button onClick={onAddEvent} startIcon={<AddIcon />} variant="outlined">
        Add New Event
      </Button>
      <Button
        onClick={() => history.push(`/weather?date=${moment(selectedDate)}`)}
        startIcon={<span style={{ fontSize: 14 }}>⛅️</span>}
        variant="outlined"
      >
        Weather Forecast
      </Button>
    </>
  );
}
