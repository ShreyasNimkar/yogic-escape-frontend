import React from "react";
import Image from "next/image";
import NewsLetter from "../landing-page-sections/NewsLetter";
import InputTextField from "../common/InputTextField";
import SectionDivider from "./SectionDivider";
import { useState } from "react";
import postHandler from "@/request-handlers/postHandler";
const NewsLetterModal = ({
  modalData,
  setModalDataFunc,
  id,
  visible,
  onCloseFunc,
  memberData,
}) => {
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

  const handleOnClose = (el) => {
    if (el.target.id === "modalcontainer") onCloseFunc();
  };
  if (!visible) return null;
  return (
    <>
      <div
        onClick={handleOnClose}
        id="modalcontainer"
        className="fixed z-50 inset-0 bg-black bg-opacity-[0.2] backdrop-blur-sm flex items-center justify-center"
      >
        <div className=" w-[90%] h-[95vh] sm:h-[75vh] py-4 sm:py-16 bg-paleIvory ">
          <div className="h-[100%] sm:h-[100%] w-full bg-white">
            <div className="flex justify-around items-center h-[90%] w-full z-50">
              <div className="h-[100%] w-4/6 bg-paleIvory relative z-50">
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
        </div>
      </div>
    </>
  );
};

export default NewsLetterModal;
