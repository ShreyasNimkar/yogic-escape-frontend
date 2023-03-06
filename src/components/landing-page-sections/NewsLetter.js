import React from "react";
import InputTextField from "../common/InputTextField";
import { useState } from "react";
import Image from "next/image";
const NewsLetter = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <>
      <div className=" h-[70vh] w-full bg-white">
        <div className=" text-center h-1/5 flex justify-around items-center text-2xl">
          SUBSCRIBE TO OUR NEWSLETTER
        </div>
        <div className="flex justify-around items-center h-4/5 ">
          <div className="h-4/5 w-4/6 bg-paleIvory">
            <div className="block h-[10%] w-full sm:none sm:h-[0]"></div>
            <div className="flex-col sm:flex-row h-1/4 sm:h-1/3 w-full flex justify-around items-center">
              <div className="w-full sm:w-1/2 h-full px-5 lg:px-16 flex justify-around items-end">
                <InputTextField
                  label="First Name"
                  name="firstname"
                  type="text"
                  value={firstName}
                  onChange={(v) => setFirstName(v.target.value)}
                />
              </div>
              <div className="w-full sm:w-1/2 h-full px-5 lg:px-16  flex justify-around items-end">
                <InputTextField
                  label="Last Name"
                  name="lastname"
                  type="text"
                  value={lastName}
                  onChange={(v) => setLastName(v.target.value)}
                />
              </div>
            </div>
            <div className="h-1/4 sm:h-1/3 px-5 lg:px-16 flex justify-around items-end">
              <InputTextField
                label="Email"
                name="email"
                type="email"
                value={email}
                onChange={(v) => setEmail(v.target.value)}
              />
            </div>
            <div className="mt-5 sm:mt-0 h-1/4 sm:h-1/3 w-full flex justify-around items-center">
              <button
                className="flex justify-between items-center bg-paleIvory border-mahogany text-mahogany border-2  hover:bg-mahogany hover:text-white active:bg-mahogany font-bold uppercase text-xs  px-3 gap-1 py-2  outline-none focus:outline-none  ease-linear transition-all duration-150"
                type="button"
              >
                <span className="text-lg">Learn More</span>
                <Image
                  src={"chevron-right.svg"}
                  alt="chevron-right"
                  height={1000}
                  width={10}
                  className="h-[1.2rem] w-[1.2rem]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
