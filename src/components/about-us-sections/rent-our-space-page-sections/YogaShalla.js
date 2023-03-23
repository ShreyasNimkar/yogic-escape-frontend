import Image from "next/image";
import React from "react";

const YogaShalla = () => {
  return (
    <div className="h-[100vh] w-full bg-paleIvory ">
      <div className="h-[13%] text-center flex justify-around items-center text-2xl">
        YOGASHALLA
      </div>
      <div className="h-[10%] text-xs  px-28">
        The yogshala is around 45 m². It is bright and easy to ventilate through
        the windows. We could provide our yoga equipment for up to 11
        participants. This room can be reserved when we don’t have an ongoing
        class in the YogaShala. You can always see our calendar to check the
        availability of the room. Feel free to get in touch with us for more
        details
      </div>
      <div className="h-[60%] flex justify-around items-center">
        <Image
          height={10000}
          width={10000}
          src={"./peopleImageYoga.svg"}
          alt="team"
          className="h-full w-[65%]"
        />
      </div>
      <div className="h-[17%] flex justify-around items-center">
        <button
          className="flex justify-between items-center bg-paleIvory border-mahogany text-mahogany border-2  hover:bg-mahogany hover:text-white active:bg-mahogany font-bold uppercase text-xs  px-3 gap-1 py-2  outline-none focus:outline-none  ease-linear transition-all duration-150"
          type="button"
        >
          <span className="text-lg pt-[0.25rem]">Book</span>
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
  );
};

export default YogaShalla;
