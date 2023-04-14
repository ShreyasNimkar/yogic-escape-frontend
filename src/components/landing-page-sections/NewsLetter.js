import React from "react";
import InputTextField from "../common/InputTextField";
import { useState } from "react";
import Image from "next/image";
import postHandler from "@/request-handlers/postHandler";
import SectionDivider from "../common/SectionDivider";
const NewsLetter = () => {
  const domain = process.env.NEXT_PUBLIC_DOMAIN;

  const URL = `https://${domain}/api/mailing-lists`;
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const submitHandler = async () => {
    const formdata = {
      data: {
        FirstName,
        LastName,
        Email,
        Phone: "9999999999",
      },
    };
    const res = await postHandler(URL, formdata, false);
    console.log(res);
    if (res.status === 1) {
      console.log(res.data);
    }
  };
  return (
    <>
      <div className=" text-center sm:w-[100%] h-[20vh]  font-semibold flex justify-center items-center flex-col bg-30% bg-no-repeat gap-2 bg-[center_bottom_2rem] text-2xl">
        SUBSCRIBE TO OUR NEWSLETTER
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
      <div className="h-[60vh] w-full bg-white">
        <div className="flex justify-around items-center h-[90%] w-full z-10">
          <div className="h-[100%] w-4/6 bg-paleIvory relative z-10">
            <div className="h-[20%] overflow-hidden">
              <SectionDivider />
            </div>
            <div className="flex-col sm:flex-row h-[33%] sm:h-[25%] w-full flex justify-around items-center relative z-10">
              <div className="w-full sm:w-1/2 h-1/2 sm:h-full px-5 lg:px-16 flex justify-around items-center ">
                <InputTextField
                  label="First Name"
                  name="FirstName"
                  type="text"
                  value={FirstName}
                  onChange={(v) => setFirstName(v.target.value)}
                />
              </div>
              {/* <Image
                src="/chakra.svg"
                alt="red-chakra"
                height={10000}
                width={10000}
                className="h-[4rem] top-[-2rem] absolute w-full z-50"
              /> */}
              <div className="w-full sm:w-1/2 h-1/2 sm:h-full px-5 lg:px-16  flex justify-around items-center">
                <InputTextField
                  label="Last Name"
                  name="LastName"
                  type="text"
                  value={LastName}
                  onChange={(v) => setLastName(v.target.value)}
                />
              </div>
            </div>
            <div className="h-[22%] sm:h-[25%] px-5 lg:px-16 flex justify-around items-center">
              <InputTextField
                label="Email"
                name="email"
                type="email"
                value={Email}
                onChange={(v) => setEmail(v.target.value)}
              />
            </div>
            <div className="sm:mt-0 h-1/4 sm:h-[20%] w-full flex justify-around items-center">
              <button
                className="flex justify-between items-center bg-paleIvory border-mahogany text-mahogany border-2  hover:bg-mahogany hover:text-white active:bg-mahogany font-bold uppercase text-xs  px-3 gap-1 py-2  outline-none focus:outline-none  ease-linear transition-all duration-150"
                type="button"
                onClick={submitHandler}
              >
                <span className="text-lg pt-[0.25rem]">Subscribe</span>
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
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
