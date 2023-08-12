import React from "react";
import { formatToLocalTime } from "../Services/WeatherService";

function TimeAndLocation({ weather: { dt, timezone, name, country } }) {
  return (
    <div className="max-[500px]:flex max-[500px]:flex-col max-[500px]:content-center max-[500px]:justify-center max-[500px]:items-center max-[500px]:ml-[-120px] max-[500px]:mr-[-120px]">
      <div className="flex items-center justify-center my-6">
        <p className="text-white font-extralight">
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>

      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">{`${name}, ${country}`}</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
