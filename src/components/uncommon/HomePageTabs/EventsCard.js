import React from "react";
import Image from "next/image";
const EventsCard = (props) => {
  return (
    <>
      <div className="flex   justify-around items-center gap-5 w-[100%] h-[20vh] sm:h-[30vh]">
        <div className="h-[100%] w-full sm:w-1/2">
          <div className="bg-hero-section-bg bg-no-repeat bg-cover h-full w-full"></div>
        </div>
        <div className="h-[100%] w-full sm:w-1/2">
          <div className="w-full h-[40%] sm:h-[17.5%] sm:text-base break-normal">
            {props.props.attributes.Name}
          </div>
          <div className="w-full h-[27.5%] text-[0.65rem] hidden sm:block">
            {props.props.attributes.Description}
          </div>
          <div className="w-full h-[12.5%] text-xs flex justify-start items-center">
            {props.props.attributes.Day}&nbsp;
            {props.props.attributes.Date}&nbsp;
            <svg
              width="8"
              height="9"
              viewBox="0 0 8 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-1/2"
            >
              <circle cx="4" cy="4.5" r="4" fill="#D9D9D9" />
            </svg>
            &nbsp;
            {props.props.attributes.Instructor}
          </div>
          <div className="w-full h-[15%] text-sm">
            €{props.props.attributes.Price}
          </div>
          <div className="w-full h-[25%] text-sm">
            <button
              className="flex justify-between items-center bg-transparent border-mahogany text-mahogany border-2  hover:bg-mahogany hover:text-white active:bg-mahogany font-bold uppercase text-xs px-[0.5rem] gap-[0.25] py-[0.2rem] sm:py-[0.3rem]  outline-none focus:outline-none  ease-linear transition-all duration-150"
              type="button"
            >
              <span className="text-sm">Enroll</span>
              <svg
                className="block stroke-current"
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
      </div>
    </>
  );
};

export default EventsCard;
