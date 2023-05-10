import React, { useState } from "react";
//datePicker
import DatePicker from "react-datepicker";
//datePicker css
import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css";
//icons
import { BsCalendar } from "react-icons/bs";

const CheckOut = ({ checkOutHandler, isDetails }) => {
  const [endDate, setEndDate] = useState(false);

  const changeHandler = (date) => {
    setEndDate(date);
    if (!isDetails) return;
    checkOutHandler(date);
  };
  return (
    <div className="relative flex items-center justify-end h-full">
      {/* icon */}
      <div className="absolute z-10 pr-8">
        <div>
          <BsCalendar className="text-accent text-base" />
        </div>
      </div>
      <DatePicker
        className="w-full h-full"
        selected={endDate}
        placeholderText="Check Out"
        onChange={(date) => changeHandler(date)}
        value={endDate}
      />
    </div>
  );
};

export default CheckOut;
