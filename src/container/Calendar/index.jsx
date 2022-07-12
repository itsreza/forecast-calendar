import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import AddEventForm from "../../components/AddEventForm";
import DatePicker from "../../components/DatePicker";
import Dialog from "../../components/Dialog";
import EventItem from "../../components/EventItem";
import AddEventDialogActions from "../../components/widgets/AddEvent/AddEventDialogActions";
import Header from "../../components/widgets/Header";
import { GREGORIAN_DASHED_DATE_FORMAT } from "../../shared/constants/dateFormats";
import { convertDateToEntryFormat } from "../../shared/utils/dateConvertor";
import uniqueIDGenerator from "../../shared/utils/uniqueIDGenerator";
import { addNewEventRequested } from "../../store/actions/eventActions";
import classes from "./index.module.scss";

export default function Calendar() {
  const currentDate = moment();
  const history = useHistory();
  const dispatch = useDispatch();
  const { eventsList } = useSelector((state) => ({
    eventsList: state?.events?.eventsList,
  }));
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [isOpenDialog, setIsOpenDialog] = useState(true);
  const [dialogType, setDialogType] = useState("WATCH_EVENT");
  const [newEventForm, setNewEventForm] = useState({});

  const isWatchEvent = dialogType === "WATCH_EVENT";

  const onChangeDatePicker = (date) => setSelectedDate(date);

  const onBlurAddEventForm = (e) => {
    const { name, value } = e?.target;
    setNewEventForm((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    setIsOpenDialog(true);
  }, [selectedDate]);

  const watchEventActionsComponent = (
    <>
      <button onClick={() => setDialogType("ADD_EVENT")}>Add New Event</button>
      <button
        onClick={() => history.push(`/weather?date=${moment(selectedDate)}`)}
      >
        See Weather
      </button>
    </>
  );

  const addEventActionsComponent = (
    <AddEventDialogActions
      onSubmit={() => {
        setDialogType("WATCH_EVENT");
        const eventDetail = {
          ...newEventForm,
          date: selectedDate,
          key: uniqueIDGenerator(),
        };
        dispatch(addNewEventRequested(eventDetail));
      }}
    />
  );

  const renderEventItems = eventsList
    ?.filter(
      (event) =>
        convertDateToEntryFormat(event.date) ===
        convertDateToEntryFormat(selectedDate)
    )
    .map((event) => <EventItem {...event} id={event.key} />);

  return (
    <div className={classes.calendar_container}>
      <div className={classes.welcome}>
        <div className={classes.title}>
          <span>👋 </span> Hey Dear, SnappMarket Developers !
        </div>
        <span className={classes.description}>
          please, pick a date you can handle your event and forecast weather
          only 5 days
        </span>
      </div>
      <DatePicker onChange={onChangeDatePicker} value={selectedDate} />
      <Dialog
        actionsComponent={
          isWatchEvent ? watchEventActionsComponent : addEventActionsComponent
        }
        title="Events"
        isOpen={isOpenDialog}
        onClose={() => setIsOpenDialog(false)}
      >
        {dialogType === "WATCH_EVENT" ? (
          <>{renderEventItems}</>
        ) : (
          <AddEventForm onBlur={onBlurAddEventForm} />
        )}
      </Dialog>
    </div>
  );
}
