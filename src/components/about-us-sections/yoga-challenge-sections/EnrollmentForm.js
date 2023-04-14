import React from "react";
import InputTextField from "../../common/InputTextField";
import { useState } from "react";
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
    console.log(res);
    if (res.status === 1) {
      console.log(res.data);
    }
  };
  return (
    <>
      <div className="h-[80vh] w-full bg-paleIvory">
        <div className="flex justify-around flex-col items-center h-full w-full z-10">
          <div className="h-[80%] border-2 border-mahogany bg-white w-4/6  relative z-10">
            <div className="h-[10%] text-center text-mahogany flex justify-around items-center font-semibold tracking-widest">
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
                <span className="text-lg ">ENROLL</span>
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

      <div className="flex justify-around items-center h-[7vh] bg-paleIvory">
        <svg
          width="30"
          height="30"
          viewBox="0 0 48 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 8.71436H40C42.2 8.71436 44 10.5144 44 12.7144V36.7144C44 38.9144 42.2 40.7144 40 40.7144H8C5.8 40.7144 4 38.9144 4 36.7144V12.7144C4 10.5144 5.8 8.71436 8 8.71436Z"
            stroke="#9F2420"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M44 12.7144L24 26.7144L4 12.7144"
            stroke="#9F2420"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="h-[25vh] px-6 sm:px-0 pt-3 bg-paleIvory">
        <div className="w-full text-lg text-center text-mahogany pb-3">
          For any questions or queries please{" "}
          <span className="underline">Email</span>&nbsp; us or{" "}
          <span className="underline">call us.</span>
        </div>
        <div className="text-center text-xs tracking-[0.3em] w-full">
          Upon receipt of your registration email, we will confirm your
          participation.
          <br /> The registration is binding once the payment is done.
        </div>
      </div>
      <div className="h-[3vh] bg-white"></div>
    </>
  );
};

export default EnrollmentForm;
