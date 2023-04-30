import React from "react";
import Calendar from "react-calendar";

const CalendarDiv = () => {
  const weekdayNames = ["M", "T", "W", "T", "F", "S", "S"];
  const formatShortWeekday = (locale, value) => {
    return weekdayNames[value.getDay()];
  };
  return (
    <>
      <div className="w-full h-full">
        <div className="w-1/2">
          <Calendar
            // onChange={onChange} value={value}
            formatShortWeekday={formatShortWeekday}
          />
        </div>
      </div>
    </>
  );
};

export default CalendarDiv;
