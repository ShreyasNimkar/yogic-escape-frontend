import React from "react";
import InputTextField from "../../common/InputTextField";
import { useState } from "react";
import CallUs from "@/components/common/CallUs";
import postHandler from "@/request-handlers/postHandler";
const EnrollmentForm = () => {
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

    if (res.status === 1) {
    }
  };
  return (
    <>
      <div className="h-[80vh] w-full bg-paleIvory">
        <div className="flex justify-around flex-col items-center h-full w-full z-10">
          <div className="h-[80%] border-2 border-mahogany bg-white w-4/6  relative z-10">
            <div className="h-max text-center text-mahogany flex justify-around items-center font-semibold tracking-widest py-8">
              ENROLL FOR THE COURSE
            </div>
            <div className="flex-col bg-white sm:flex-row h-[33%] sm:h-[25%] w-full flex justify-around items-center relative z-10">
              <div className="w-full  sm:w-1/2 h-1/2 sm:h-full px-5 lg:px-16 flex justify-around items-center ">
                <InputTextField
                  label="First Name"
                  name="FirstName"
                  type="text"
                  value={FirstName}
                  onChange={(v) => setFirstName(v.target.value)}
                />
              </div>

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
                className="flex justify-between items-center bg-white border-mahogany text-mahogany border-2  hover:bg-mahogany hover:text-white active:bg-mahogany font-bold uppercase text-xs  px-3 gap-1 py-2  outline-none focus:outline-none  ease-linear transition-all duration-150"
                type="button"
                onClick={submitHandler}
              >
                <span className="text-lg pt-[0.25rem]">ENROLL</span>
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

      <CallUs />
      <div className="h-[3vh] bg-white"></div>
    </>
  );
};

export default EnrollmentForm;
