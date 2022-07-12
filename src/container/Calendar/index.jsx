import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import AddEventForm from '../../components/AddEventForm';
import DatePicker from '../../components/DatePicker'
import Dialog from '../../components/Dialog';
import EventItem from '../../components/EventItem';

export default function Calendar() {
    const currentDate = moment();
    const history = useHistory()
    const [selectedDate, setSelectedDate] = useState(currentDate)
    const [isOpenDialog, setIsOpenDialog] = useState(true)
    const [dialogType , setDialogType] = useState("WATCH_EVENT")
    const [newEventForm, setNewEventForm] = useState({})
    const [eventList , setEventList] = useState([])

    const isWatchEvent = dialogType === "WATCH_EVENT"

    const onChangeDatePicker = (date)=> setSelectedDate(date)

    const onBlurAddEventForm = (e)=> {
        const {name , value } = e?.target;
        setNewEventForm((prevState)=> ({...prevState , [name] : value}))
    }

    useEffect(()=>{
        setIsOpenDialog(true)
    } , [selectedDate])

const watchEventActionsComponent = <>
        <button onClick={()=> setDialogType("ADD_EVENT")}>Add New Event</button>
        <button onClick={()=> history.push(`/weather?date=${moment(selectedDate)}`)}>See Weather</button>
        </>

        const addEventActionsComponent = <>
        <button onClick={()=> {setDialogType("WATCH_EVENT")
        const eventDetail = {...newEventForm , date : selectedDate}
        setEventList((prevState => [...prevState , eventDetail]))
    }}>Submit Event</button>
        </>

        const renderEventItems = eventList?.map(event=> <EventItem {...event} />)

  return (
    <div>
        <DatePicker onChange={onChangeDatePicker}  value={selectedDate}/>
        <Dialog actionsComponent={isWatchEvent ? watchEventActionsComponent : addEventActionsComponent} title="Events" isOpen={isOpenDialog} onClose={()=> setIsOpenDialog(false)}>
        {dialogType === "WATCH_EVENT" ? <>{renderEventItems}</> : <AddEventForm onBlur={onBlurAddEventForm} />}
        </Dialog>
    </div>
  )
}