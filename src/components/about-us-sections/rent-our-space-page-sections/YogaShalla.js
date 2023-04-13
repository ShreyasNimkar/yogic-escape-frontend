import Image from "next/image";
import React from "react";

const YogaShalla = () => {
  return (
    <div className="h-[60vh] sm:h-[100vh] w-full bg-paleIvory ">
      <div className="sm:h-[15%] h-[20%] text-center flex justify-center flex-col gap-3 items-center text-2xl">
        YOGASHALLA
        <svg
          width="787"
          height="3"
          viewBox="0 0 787 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[80%] sm:w-1/4"
        >
          <line
            x1="1.5"
            y1="1.5"
            x2="785.5"
            y2="1.5"
            stroke="#9F2420"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="h-[20%] sm:h-[15%] text-md px-4 sm:px-28">
        The yogshala is around 45 m². It is bright and easy to ventilate through
        the windows. We could provide our yoga equipment for up to 11
        participants. This room can be reserved when we don’t have an ongoing
        class in the YogaShala. You can always see our calendar to check the
        availability of the room. Feel free to get in touch with us for more
        details
      </div>
      <div className="h-[40%] sm:h-[60%] flex justify-around items-center">
        <Image
          height={10000}
          width={10000}
          src={"./peopleImageYoga.svg"}
          alt="team"
          className="h-full sm:w-[65%]"
        />
      </div>
      <div className="sm:h-[10%] flex justify-around items-center">
        <button
          className="flex justify-between items-center bg-mahogany border-mahogany text-white border-2  hover:bg-white hover:text-mahogany active:bg-mahogany font-bold uppercase text-xs  px-3 gap-1 py-2  outline-none focus:outline-none  ease-linear transition-all duration-150"
          type="button"
        >
          <span className="text-lg">Book</span>
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
  );
};

export default YogaShalla;
