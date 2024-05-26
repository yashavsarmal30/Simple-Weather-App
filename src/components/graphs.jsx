import React, { useEffect } from "react";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import moment from 'moment';


function Pressure({ data, hourly }) {
    useEffect(() => console.log("hourly", hourly), [hourly]);
    return (
      <div className="graph">
        {hourly.length ? (
          <Chart
            type="line"
            data={{
              labels: hourly.map((hour, index) => index + 1),
              datasets: [
                {
                  label: "Temperature",
                  data: hourly.map((hour) => hour.temp),
                  fill: true,
                  tension: 0,
                  pointStyle:'line',
                  backgroundColor: "rgb(243,251,255)",
                  borderColor: "rgb(134,202,254)",
                },
              ],
            }}
          />
        ) : null}
  
      
  
        <div>
        {data?.sunrise ? (
          <div>
          
          </div>
        ):null}
        {data?.sunrise ? (
          <Chart
            type="line"
            data={{
              labels: [moment.unix(data.sunrise).format('hh a'), moment.unix(parseInt((data.sunrise+data.sunset)/2)).format('hh a'), moment.unix(data.sunset).format('hh a')],
              datasets: [
                {
                  label: "Temperature",
                  data: [
                    hourly[parseInt(moment.unix(data.sunrise).format('h'))-1].temp,
                    hourly[parseInt(moment.unix(parseInt((data.sunrise+data.sunset)/2)).format('HH'))-1].temp,
                    hourly[parseInt(moment.unix(data.sunset).format('HH'))-1].temp
                  ],
                  fill: true,
                  tension: 0,
                  pointStyle:'line',
                  backgroundColor: "rgb(243,251,255)",
                  borderColor: "rgb(134,202,254)",
                },
              ],
            }}
          />
        ) : null}
        </div>
      </div>
  );
};

export default Pressure;