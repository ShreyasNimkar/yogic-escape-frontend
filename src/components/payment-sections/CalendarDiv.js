import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";

const CalendarDiv = () => {
  const weekdayNames = ["M", "T", "W", "T", "F", "S", "S"];
  const formatShortWeekday = (locale, value) => {
    return weekdayNames[value.getDay()];
  };
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState([]);
  const [availableTime, setAvailableTime] = useState([
    "12:32",
    "55:32",
    "32:34",
  ]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const timeOnClickHandler = (el) => {
    setSelectedTime(el);
  };
  return (
    <>
      <div className="w-full h-full px-20 flex justify-around items-center  ">
        <div className="w-1/2 h-full flex justify-start gap-7 items-center flex-col">
          <p className="text-sm text-center text-textGray">
            PREGNANCY THERAPY / SELECT DATE AND TIME
          </p>
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            formatShortWeekday={formatShortWeekday}
          />
        </div>
        <div className="w-1/2 h-full flex justify-start gap-7 items-center flex-col">
          <p className="text-sm text-center text-textGray">SELECT TIME</p>
          <div className="w-[80%] h-[50%] flex justify-around items-center gap-3 flex-wrap">
            {availableTime &&
              availableTime.map((el, index) => {
                if (selectedTime === el)
                  return (
                    <>
                      <button
                        className="flex justify-between items-center bg-mahogany border-mahogany text-white border-2  hover:bg-mahogany hover:text-white active:bg-mahogany  text-xs  px-4 gap-6 py-1 w-[25%] outline-none focus:outline-none  ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => {
                          timeOnClickHandler(el);
                        }}
                      >
                        <span className="text-base pt-[0.25rem] w-full h-full">
                          {el}
                        </span>
                      </button>
                    </>
                  );
                else {
                  return (
                    <>
                      <button
                        className="flex justify-between items-center bg-paleIvory border-mahogany text-mahogany border-2  hover:bg-mahogany hover:text-white active:bg-mahogany  text-xs  px-4 gap-6 py-1 w-[25%] outline-none focus:outline-none  ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => {
                          timeOnClickHandler(el);
                        }}
                      >
                        <span className="text-base pt-[0.25rem] w-full h-full">
                          {el}
                        </span>
                      </button>
                    </>
                  );
                }
              })}
          </div>
          <button
            className="flex justify-between items-center bg-paleIvory border-mahogany text-mahogany border-2  hover:bg-mahogany hover:text-white active:bg-mahogany  text-xs  px-2 gap-2 py-2  outline-none focus:outline-none  ease-linear transition-all duration-150"
            type="button"
          >
            <span className="text-base pt-[0.25rem] w-full h-full">
              REQUEST BOOKING
            </span>{" "}
            <svg
              className="stroke-current"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.24988 16.5L13.7499 11L8.24988 5.5"
                // stroke="#9F2420"
                strokeWidth="1.83333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default CalendarDiv;
