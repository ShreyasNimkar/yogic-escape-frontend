import Image from "next/image";
import React from "react";
import { useState } from "react";
import NewsLetterModal from "./NewsLetterModal";
const Footer = () => {
  const socialMediaNavigations = [
    { name: "twitter" },
    { name: "instagram" },
    { name: "youtube" },
    { name: "spotify" },
  ];
  const [modalVisible, setModalVisible] = useState(null);
  const [modalData, setModalData] = useState([]);
  const handleModalOnClose = () => {
    setModalVisible(null);
  };
  return (
    <>
      <div className="h-[25vh] sm:h-[40vh] bg-paleIvory">
        <div className="h-[90%] w-full flex justify-around items-center">
          <div className="h-full w-1/3  p-[0.2rem] sm:p-[2rem]">
            <div className="text-mahogany mb-3">GET IN TOUCH</div>
            <div className="text-xs text-charcoal mb-1 cursor-pointer hover:underline">
              Neha
            </div>
            <div className="text-xs text-charcoal mb-1 cursor-pointer hover:underline">
              Sanjeev
            </div>
            <div className="text-xs text-charcoal mb-1 cursor-pointer hover:underline">
              hello@yogicescape.de
            </div>
          </div>
          <div className="h-full w-1/3 p-[0.2rem] sm:p-[2rem] ">
            <div className="text-mahogany mb-3">QUICK LINKS</div>
            <div className="text-xs text-charcoal mb-1 cursor-pointer hover:underline">
              Contact Us
            </div>
            <div className="text-xs text-charcoal mb-1 cursor-pointer hover:underline">
              Prices
            </div>{" "}
            <div className="text-xs text-charcoal mb-1 cursor-pointer hover:underline">
              Classes
            </div>
            <div className="text-xs text-charcoal mb-1 cursor-pointer hover:underline">
              Business Yoga
            </div>
            <div className="text-xs text-charcoal mb-1 cursor-pointer hover:underline">
              Space Rentals
            </div>
          </div>
          <div className="h-full w-1/3  p-[0.2rem] sm:p-[2rem] text-mahogany">
            STAY UPDATED
            <div className="flex-col flex sm:flex-row  justify-start items-start gap-[0.2rem] sm:gap-3 mt-3">
              {socialMediaNavigations.map((value, index) => {
                return (
                  <Image
                    src={`${value.name}.svg`}
                    key={index}
                    alt="nav-icon"
                    height={100}
                    width={100}
                    className="h-[1.3rem] w-[1.3rem] cursor-pointer cursor-pointer hover:underline"
                  />
                );
              })}
            </div>
            <div className=" pt-3">
              <button
                onClick={(modalId) => {
                  setModalVisible(modalId);
                }}
                className="flex justify-between items-center bg-mahogany border-mahogany text-white border-2  hover:bg-paleIvory hover:text-mahogany active:bg-mahogany font-bold uppercase text-xs px-2 sm:px-4 gap-1 py-[0.1rem]  outline-none focus:outline-none  ease-linear transition-all duration-150"
                type="button"
              >
                <span className="text-lg">SUBSCRIBE</span>
                <svg
                  className=" stroke-current hidden sm:block"
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
      {modalVisible !== null && (
        <NewsLetterModal
          onCloseFunc={handleModalOnClose}
          visible={true}
          id={modalVisible}
          modalData={modalData}
        />
      )}
      <div className="  text-base flex justify-around w-full text-center p-10 bg-paleIvory items-center  text-charcoal h-[10%]">
        © 2022 by YOGICESCAPE
      </div>
    </>
  );
};

export default Footer;
