import React, { useState } from "react";
//datePicker
import DatePicker from "react-datepicker";
//datePicker css
import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css";
//icons
import { BsCalendar } from "react-icons/bs";

const CheckIn = ({ checkInHandler, text, isDetails }) => {
  const [startDate, setStartDate] = useState(false);

  const chandeHandler = (date) => {
    setStartDate(date);
    if (!isDetails) return;
    checkInHandler(date);
  };

  return (
    <div className="relative flex items-center justify-end h-full">
      {/* icon */}
      <div className="absolute z-10 pr-8">
        <div>
          <BsCalendar className="text-accent text-base" />
        </div>
      </div>
      {text && (
        <DatePicker
          className="w-full h-full"
          selected={startDate}
          placeholderText={text}
          onChange={(date) => chandeHandler(date)}
          value={startDate}
        />
      )}
      {!text && (
        <DatePicker
          className="w-full h-full"
          selected={startDate}
          placeholderText={text}
          onChange={(date) => setStartDate(date)}
          value={startDate}
        />
      )}
    </div>
  );
};

export default CheckIn;
