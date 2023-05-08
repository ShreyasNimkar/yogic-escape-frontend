import React from "react";
import Image from "next/image";
import { useState } from "react";
import InputTextField from "../common/InputTextField";
import RedInputTextField from "../common/RedInputTextField";
const GiftCard = () => {
  const [selectedAmount, setselectedAmount] = useState([]);
  const [amount, setAmount] = useState([
    "123",
    "456",
    "2",
    "3",
    "45",
    "23456",
    "334",
    "4",
  ]);
  const amountClickHandler = (el) => {
    setselectedAmount(el);
  };
  const [selectedRecipient, setselectedRecipient] = useState([]);
  const [recipient, setrecipient] = useState(["Someone", "Yourself"]);
  const recipientClickHandler = (el) => {
    setselectedRecipient(el);
  };
  return (
    <>
      <div className="h-[100vh] sm:h-[100vh] sm:px-36 flex sm:flex-row flex-col justify-end items-center">
        <div className="w-[90%] sm:w-1/2 h-[30%] sm:h-[100%]">
          <Image
            src={"/ourStory.png"}
            alt="Team"
            height={10000}
            width={10000}
            className="object-cover h-[30vh] sm:h-[40vh] sm:mt-3 w-full sm:w-[90%]"
          />
        </div>
        <div className="w-[90%] sm:w-1/2 h-[70%] sm:h-[100%]">
          <div className="sm:block hidden text-textGray text-xs w-[100%] sm:h-[5%] pt-2  justify-start items-center">
            GIFT CARD
          </div>
          <div className="text-textGray flex justify-start items-center text-xl w-[100%] pt-3 sm:h-[10%]">
            YOGIC ESCAPE GIFT CARDS
          </div>
          <div className="text-textGray text-xs w-[100%] h-max py-1 sm:py-3">
            You can&apos;t go wrong with a gift card. Choose anamount and write
            a personalized message to makethis gift your own.
          </div>
          <div className="w-[100%] h-max">
            <div className="text-textGray text-sm py-1">Amount</div>
            <div className="flex h-full flex-wrap py-1 gap-x-5 gap-y-3 justify-around items-center w-full sm:w-[80%]">
              {amount &&
                amount.map((el, index) => {
                  if (selectedAmount === el)
                    return (
                      <>
                        <button
                          className="flex justify-between items-center bg-mahogany border-mahogany text-white border-2  hover:bg-mahogany hover:text-white active:bg-mahogany  text-xs  px-2 sm:gap-6 py-1 w-[20%] outline-none focus:outline-none  ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => {
                            amountClickHandler(el);
                          }}
                        >
                          <span className="text-base pt-[0.25rem] w-full h-full">
                            €{el}
                          </span>
                        </button>
                      </>
                    );
                  else {
                    return (
                      <>
                        <button
                          className="flex justify-between items-center bg-white border-mahogany text-mahogany border-2  hover:bg-mahogany hover:text-white active:bg-mahogany  text-xs  px-2 sm:gap-6 py-1 w-[20%] outline-none focus:outline-none  ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => {
                            amountClickHandler(el);
                          }}
                        >
                          <span className="text-base pt-[0.25rem] w-full h-full">
                            €{el}
                          </span>
                        </button>
                      </>
                    );
                  }
                })}
            </div>
          </div>
          <div className="w-[100%] h-max">
            <div className="text-textGray text-sm pt-2 py-1">For Whom</div>
            <div className="flex h-full py-1 flex-wrap gap-x-10 gap-y-3 justify-start items-center w-full">
              {recipient &&
                recipient.map((el, index) => {
                  if (selectedRecipient === el)
                    return (
                      <>
                        <button
                          className="flex justify-between items-center bg-mahogany border-mahogany text-white border-2  hover:bg-mahogany hover:text-white active:bg-mahogany  text-xs  px-8 sm:gap-6 py-1 w-max outline-none focus:outline-none  ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => {
                            recipientClickHandler(el);
                          }}
                        >
                          <span className="text-base pt-[0.25rem] w-full h-full">
                            {el}
                          </span>
                        </button>
                      </>
                    );
                  else {
                    return (
                      <>
                        <button
                          className="flex justify-between items-center bg-white border-mahogany text-mahogany border-2  hover:bg-mahogany hover:text-white active:bg-mahogany  text-xs  px-8 sm:gap-6 py-1 w-max outline-none focus:outline-none  ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => {
                            recipientClickHandler(el);
                          }}
                        >
                          <span className="text-base pt-[0.25rem] w-full h-full">
                            {el}
                          </span>
                        </button>
                      </>
                    );
                  }
                })}
            </div>
          </div>

          <div className="w-full sm:w-[80%] py-2 flex flex-col justify-start items-start">
            <RedInputTextField
              label="Email"
              name="email"
              type="email"
              // value={Email}
              // onChange={(v) => setEmail(v.target.value)}
            />
            <RedInputTextField
              label="Email"
              name="email"
              type="email"
              // value={Email}
              // onChange={(v) => setEmail(v.target.value)}
            />
            <RedInputTextField
              label="Email"
              name="email"
              type="email"
              // value={Email}
              // onChange={(v) => setEmail(v.target.value)}
            />
            <RedInputTextField
              label="Email"
              name="email"
              type="email"
              // value={Email}
              // onChange={(v) => setEmail(v.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-around items-center py-3">
        <button
          className="flex justify-between items-center bg-mahogany text-white border-[0.15rem] border-mahogany hover:bg-white hover:text-mahogany font-bold  text-xs  px-3  py-2  outline-none focus:outline-none  ease-linear transition-all duration-150"
          type="button"
        >
          <span className="h-full w-full text-lg flex items-end justify-around pt-[0.25rem]">
            BUY NOW
          </span>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="block stroke-current"
          >
            <path
              d="M8.24988 16.5L13.7499 11L8.24988 5.5"
              // stroke="#ffffffff"
              strokeWidth="1.83333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default GiftCard;
