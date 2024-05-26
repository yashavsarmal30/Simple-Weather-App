import React from "react";
import {
  UilTemperature,
  UilTear,
 
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "../services/weatherService";

function Details({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    pressure,
    feels_like,
    timezone,
  },
}) {
  return (
    <div className="details">

      <div className="det1">

      <p className="detH">{`${temp.toFixed()}°`}</p>

      <img src={iconUrlFromCode(icon)} alt="" className="detI" />

      <div className="det11">

        <div >
             High <UilTemperature size={15}  className="ic"/> :{" "}{`${temp_max.toFixed()}°`}
        </div>
      
        <div >
           Low <UilTemperature size={15} className="ic"/> :{" "}{`${temp_min.toFixed()}°`} 
        </div>
      </div>

          
      </div>



      <div className="temp2">
 
        
        <div className="temCol">
          <p> <UilSun className="ic" size={18}/> Sunrise :{" "}</p>
            {formatToLocalTime(sunrise, timezone, "hh:mm a")}
        </div>


        <div className="temCol">
          <p> <UilSunset className="ic" size={18}/>  Sunset :{" "}</p>
              {formatToLocalTime(sunset, timezone, "hh:mm a")}
        </div>

        <div className="temCol">
          <p><UilTear className="ic" size={14}/> Humidity :{" "}</p>
           {`${humidity.toFixed()} %`}
        </div>
      
        <div className="temCol">
          <p> Pressure :{" "}</p>
          {`${pressure} hpa`} 
        </div>

      
       
      </div>
    </div>
  );
}

export default Details;
