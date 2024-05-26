import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
    
      navigator.geolocation.getCurrentPosition((position) => {
       
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  return (
    <div className="inputmain">
       
      <div className="">
      <UilLocationPoint
          size={25}
          className="inpI"
          onClick={handleLocationClick}
        />
         </div>

        <div className="inp">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="Search for city...."
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        <UilSearch
          size={25}
          className="inpI"
          onClick={handleSearchClick}
        />
       </div>




      <div className="inpR">
        <button
          name="metric"
          className="inpI"
          onClick={handleUnitsChange}
        >
          °C
        </button>
        <p className="inpI">|</p>
        <button
          name="imperial"
          className="inpI"
          onClick={handleUnitsChange}
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
