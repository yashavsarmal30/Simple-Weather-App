import React from "react";
import { formatToLocalTime } from "../services/weatherService";

function Time({ weather: { dt, timezone, name, country } }) {
  return (
    <div className="timer">
      <div className="time1">
          {formatToLocalTime(dt, timezone)}
      </div>
        <p className="time2">{`${name}, ${country}`}</p>
      
    </div>
  );
}

export default Time;
