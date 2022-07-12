import moment from 'moment'
import React, { useEffect } from 'react'
import {  useLocation } from 'react-router-dom'
import { getRequestMethod } from '../../services/httpService'

export default function Weather() {

  const searchParam = useLocation()?.search
  const dateURLQueryString = new URLSearchParams(searchParam).get("date")


  
  console.log(({dateURLQueryString}))

  const convertedDateToTimeStamp = moment(dateURLQueryString).format("X")

    useEffect(()=> {
        // const apiAddress =  `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=35.7219&lon=51.3347&dt=${convertedDateToTimeStamp}&appid=${process.env.REACT_APP_WEATHER_SERVICE_TOKEN}`
        // const apiAddress =  `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=35.7219&lon=51.3347&dt=${convertedDateToTimeStamp}&appid=${process.env.REACT_APP_WEATHER_SERVICE_TOKEN}`
        const apiAddress =  `https://api.openweathermap.org/data/2.5/weather?lat=35.7219&lon=51.3347&dt=${convertedDateToTimeStamp}&appid=${process.env.REACT_APP_WEATHER_SERVICE_TOKEN}`
        getRequestMethod(apiAddress).then((response)=> console.log("W" , response))
    } , [])

  return (
    <div>Weather

      {convertedDateToTimeStamp}
    </div>
  )
}
