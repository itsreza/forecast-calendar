import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AddEventForm from "../../components/widgets/AddEventDialog/AddEventForm";
import DatePicker from "../../components/UI/DatePicker";
import Dialog from "../../components/UI/Dialog";
import EventItem from "../../components/widgets/EventDialog/EventItem";
import AddEventDialogActions from "../../components/widgets/AddEventDialog/AddEventDialogActions";
import {
  convertDateToEntryFormat,
  getCurrentDate,
} from "../../shared/utils/dateConvertor";
import uniqueIDGenerator from "../../shared/utils/uniqueIDGenerator";
import classes from "./index.module.scss";
import EmptyEvent from "../../components/widgets/EventDialog/EmptyEvent";
import EventDialogActions from "../../components/widgets/EventDialog/EventDialogActions";

export default function Calendar() {
  const currentDate = getCurrentDate();

  /** Dialog Types */
  const WATCH_EVENT_DIALOG_TYPE = "WATCH_EVENT";
  const ADD_EVENT_DIALOG_TYPE = "ADD_EVENT";

  const { eventsList } = useSelector((state) => ({
    eventsList: state?.events?.eventsList,
  }));
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [dialogType, setDialogType] = useState(WATCH_EVENT_DIALOG_TYPE);
  const [newEventForm, setNewEventForm] = useState({});

  const isWatchEvent = dialogType === WATCH_EVENT_DIALOG_TYPE;

  const onChangeDatePicker = (date) => {
    setSelectedDate(date)
    setIsOpenDialog(true)
  };

  const onBlurAddEventForm = (e) => {
    const { name, value } = e?.target;
    setNewEventForm((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    if(!isOpenDialog || dialogType === "WATCH_EVENT"){
      setNewEventForm({})
      setDialogType(WATCH_EVENT_DIALOG_TYPE)
    }
  }, [isOpenDialog , dialogType]);

  const watchEventActionsComponent = (
    <EventDialogActions
      selectedDate={selectedDate}
      onAddEvent={() => setDialogType(ADD_EVENT_DIALOG_TYPE)}
    />
  );

  const addEventActionsComponent = (
    <AddEventDialogActions
      eventDetail={{
        ...newEventForm,
        date: selectedDate,
        key: uniqueIDGenerator(),
      }}
      onAfterSubmit={() => setDialogType(WATCH_EVENT_DIALOG_TYPE)}
    />
  );

  const onCloseDialog = () => setIsOpenDialog(false)
  

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
        onClose={onCloseDialog}
      >
        {dialogType === WATCH_EVENT_DIALOG_TYPE ? (
          <>
            {renderEventItems?.length > 0 ? (
              renderEventItems
            ) : (
              <EmptyEvent date={selectedDate} />
            )}
          </>
        ) : (
          <AddEventForm onBlur={onBlurAddEventForm} />
        )}
      </Dialog>
    </div>
  );
}
