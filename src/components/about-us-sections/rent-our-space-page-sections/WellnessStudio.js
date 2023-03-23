import React from "react";
import Image from "next/image";
const WellnessStudio = () => {
  return (
    <>
      <div className="h-[120vh] w-full bg-paleIvory ">
        <div className="h-[13%] text-center flex justify-around items-center text-2xl">
          WELLNESS STUDIO
        </div>
        <div className="h-[25%] text-xs  px-28">
          The small yoga room is around 18 m². The room is cozy and easy to
          ventilate with the windows available. We could provide the following
          for your therapies and private sessions
          <ul className="list-disc">
            <li>Massage beds</li>
            <li>Lamps-: Side lamps – Salt Lamp</li>
            <li>Speaker</li>
            <li>High-Speed Internet</li>
            <li>Kettle for tea</li>
          </ul>
        </div>
        <div className="h-[45%] flex justify-around items-center">
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
    </>
  );
};

export default WellnessStudio;
