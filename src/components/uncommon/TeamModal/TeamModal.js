import React from "react";
import { useState } from "react";
import Image from "next/image";
const TeamModal = ({
  modalData,
  setModalDataFunc,
  id,
  visible,
  onCloseFunc,
  memberData,
}) => {
  const domain = process.env.NEXT_PUBLIC_DOMAIN;
  console.log(memberData);
  console.log(modalData);

  const handleOnClose = (el) => {
    if (el.target.id === "modalcontainer") onCloseFunc();
  };
  if (!visible) return null;
  return (
    <div
      onClick={handleOnClose}
      id="modalcontainer"
      className="fixed inset-0 bg-black bg-opacity-[0.2] backdrop-blur-sm flex items-center justify-center"
    >
      <div className=" w-[90%] h-[95vh] sm:h-[75vh] py-4 sm:py-16 bg-paleIvory flex justify-around items-center">
        <div className="w-[8%] h-full  flex justify-around items-center flex-col p-1">
          <svg
            width="25"
            height="25"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
            onClick={() => {
              const newId = modalData.id - 1;
              const el = memberData[newId - 1];
              // console.log(el);
              if (el) setModalDataFunc(el);
            }}
          >
            <path
              d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="w-[84%] h-full flex flex-col-reverse sm:flex-row">
          <div className="w-full sm:w-[70%] h-[60%] sm:h-full">
            <p className="py-1 text-2xl">{modalData.attributes.Name}</p>
            <p className="sm:pb-4 text-mahogany italic">
              {modalData.attributes.Designation}{" "}
              <span className="text-md text-dimGray not-italic">
                {" "}
                {modalData.attributes.Experience}
              </span>
            </p>
            <p className="text-xs">{modalData.attributes.About}</p>
          </div>
          <div className="w-full sm:w-[30%] h-[40%] sm:h-full overflow-hidden flex justify-around items-center">
            <Image
              src={`https://${domain}${modalData.attributes.Profile.data.attributes.url}`}
              alt="Team"
              height={10000}
              width={10000}
              className="w-full h-auto p-5 "
            />
          </div>
        </div>
        <div className="w-[8%] h-full flex  justify-around items-center flex-col p-1">
          <svg
            width="25"
            height="25"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
            onClick={() => {
              const newId = modalData.id;
              const el = memberData[newId + 1];
              // console.log(el);
              if (el) setModalDataFunc(el);
            }}
          >
            <path
              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
              fill="#000000"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TeamModal;
