import React from 'react'
import classes from "./index.module.scss"
export default function WeatherCard({label , icon , value}) {
  return (
    <div className={classes.weather_card}>
      {icon}
      {value}
      <span>{label}</span>
    </div>
  )
}
