import React from "react";
import Image from "next/image";
import Title from "@/components/common/Title";
const WellnessStudio = () => {
  return (
    <>
      <Title value={"WELLNESS STUDIO"} color={"white"} />
      <div className="h-[80vh] sm:h-[100vh] w-full bg-white ">
        <div className="h-[30%] sm:h-[30%] text-md px-4 sm:px-28">
          The small yoga room is around 18 m². The room is cozy and easy to
          ventilate with the windows available. We could provide the following
          for your therapies and private sessions
          <ul className="list-disc  marker:text-blue-500">
            <li className="pl-10 flex justify-start around items-center">
              <svg
                width="10"
                height="10"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z"
                  fill="currentColor"
                ></path>
              </svg>
              &nbsp; Massage beds
            </li>
            <li className="pl-10 flex justify-start around items-center">
              <svg
                width="10"
                height="10"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z"
                  fill="currentColor"
                ></path>
              </svg>
              &nbsp; Lamps-: Side lamps – Salt Lamp
            </li>
            <li className="pl-10 flex justify-start around items-center">
              <svg
                width="10"
                height="10"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z"
                  fill="currentColor"
                ></path>
              </svg>
              &nbsp; Speaker
            </li>
            <li className="pl-10 flex justify-start around items-center">
              <svg
                width="10"
                height="10"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z"
                  fill="currentColor"
                ></path>
              </svg>
              &nbsp; High-Speed Internet
            </li>
            <li className="pl-10 flex justify-start around items-center">
              <svg
                width="10"
                height="10"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z"
                  fill="currentColor"
                ></path>
              </svg>
              &nbsp; Kettle for tea
            </li>
          </ul>
        </div>
        <div className="h-[40%] sm:h-[50%] flex justify-around items-center">
          <Image
            height={10000}
            width={10000}
            src={"./peopleImageYoga.svg"}
            alt="team"
            className="h-full sm:w-[65%]"
          />
        </div>
        <div className="h-[10%] sm:h-[17%] flex justify-around items-center">
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
    </>
  );
};

export default WellnessStudio;
