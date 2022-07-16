import React from "react";
import Button from "../../../UI/Button";
import AddIcon from "@mui/icons-material/Add";
import { useHistory } from "react-router-dom";
import moment from "moment";
import { convertDateToEntryFormat, isFiveLatestDay } from "../../../../shared/utils/dateConvertor";
export default function EventDialogActions({ onAddEvent, selectedDate }) {
  const history = useHistory();
  const formattedSelectedDay = convertDateToEntryFormat(selectedDate)
  const isFiveLatestDaySelected = isFiveLatestDay(formattedSelectedDay)


  return (
    <>
      <Button onClick={onAddEvent} startIcon={<AddIcon />} variant="outlined">
        Add New Event
      </Button>
      <Button
        onClick={() => history.push(`/weather?date=${formattedSelectedDay}`)}
        startIcon={<span style={{ fontSize: 14 }}>⛅️</span>}
        variant="outlined"
        disabled={!isFiveLatestDaySelected}
      >
        {isFiveLatestDaySelected ? "Weather Forecast" : "Only 5Day Available"}
      </Button>
    </>
  );
}
