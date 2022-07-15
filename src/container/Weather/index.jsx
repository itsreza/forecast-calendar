import moment from "moment";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getRequestMethod } from "../../services/httpService";
import { getCurrentLocation } from "../../services/locationService";
import classes from "./index.module.scss";
import KeyboardDoubleArrowUpOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowUpOutlined";
import KeyboardDoubleArrowDownOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";
import ThermostatOutlinedIcon from "@mui/icons-material/ThermostatOutlined";
import WindPowerOutlinedIcon from "@mui/icons-material/WindPowerOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import WeatherCard from "./WeatherCard";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { useCurrentPosition } from "../../hooks/useCurrentPosition";
import convertKelvinToCelsius from "../../shared/utils/kelvinToCelsius";
import {
  convertDateToEntryFormat,
  convertTimeStampToDateFormat,
} from "../../shared/utils/dateConvertor";
import Loading from "../../components/UI/Loading";
export default function Weather() {
  const [weather, setWeather] = useState();
  const [position, locationErrorMessage] = useCurrentPosition();
  const [isLoading, setIsLoading] = useState(false);
  const searchParam = useLocation()?.search;
  const dateURLQueryString = new URLSearchParams(searchParam).get("date");

  const convertedDateToTimeStamp = moment(dateURLQueryString).format("X");

  const showingDate = moment(dateURLQueryString).format("YYYY/DD/MM");

  useEffect(() => {
    setIsLoading(true);
    if (position) {
      const {
        coords: { latitude, longitude },
      } = position;
      const apiAddress = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&cnt=100&appid=${process.env.REACT_APP_WEATHER_SERVICE_TOKEN}`;
      getRequestMethod(apiAddress)
        .then((response) => {
          const currentDayWeather = response?.data?.list?.filter(
            (dailyWeather) => {
              return (
                convertTimeStampToDateFormat(dailyWeather.dt) ===
                convertDateToEntryFormat(dateURLQueryString)
              );
            }
          )?.[0];
          setWeather(currentDayWeather);
        })
        .finally(() => setIsLoading(false));
    }
  }, [position]);

  return (
    <div>
      {isLoading ? (
        <>
          <Loading />
          <Loading />
          <Loading />
        </>
      ) : (
        <>
          <div className={classes.title}>⛅️ Forecast</div>
          <div className={classes.date}>Date : {showingDate}</div>
          {locationErrorMessage && (
            <div className={classes.error_location}>{locationErrorMessage}</div>
          )}
          <div className={classes.title_separator}>Weather</div>
          <div className={classes.weather_card_container}>
            <WeatherCard
              value={weather?.weather?.[0]?.main}
              label={weather?.weather?.[0]?.description}
              icon={
                <img
                  src={`http://openweathermap.org/img/wn/${weather?.weather?.[0]?.icon}@2x.png`}
                  alt=""
                />
              }
            />
            <WeatherCard
              value={moment(weather?.sys?.sunset).format("YYYY/DD/MM HH:mm:SS")}
              label="Sunset"
              icon={<WbSunnyOutlinedIcon />}
            />
          </div>

          <div className={classes.title_separator}>Temp</div>
          <div className={classes.weather_card_container}>
            <WeatherCard
              value={convertKelvinToCelsius(weather?.main?.temp_max)}
              label="MAX"
              icon={
                <KeyboardDoubleArrowUpOutlinedIcon
                  className={classes.red_icon}
                />
              }
            />
            <WeatherCard
              value={convertKelvinToCelsius(weather?.main?.temp)}
              label="TEMP"
              icon={<ThermostatOutlinedIcon />}
            />
            <WeatherCard
              value={convertKelvinToCelsius(weather?.main?.temp_min)}
              label="MIN"
              icon={
                <KeyboardDoubleArrowDownOutlinedIcon
                  className={classes.green_icon}
                />
              }
            />
          </div>
          <div className={classes.title_separator}>Wind</div>
          <div className={classes.weather_card_container}>
            <WeatherCard
              value={weather?.wind.speed}
              label="Speed"
              icon={<WindPowerOutlinedIcon />}
            />
            <WeatherCard
              value={weather?.wind.deg}
              label="Degree"
              icon={<AirOutlinedIcon />}
            />
          </div>
        </>
      )}
    </div>
  );
}
