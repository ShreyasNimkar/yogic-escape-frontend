import React from "react";
import Image from "next/image";
import { useState } from "react";
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
  return (
    <>
      <div className="h-[80vh] px-36 flex justify-around items-center">
        <div className="w-1/2 h-[90%]">
          <Image
            src={"/ourStory.png"}
            alt="Team"
            height={10000}
            width={10000}
            className="object-cover  h-[60%] w-[90%]"
          />
        </div>
        <div className="w-1/2 h-[90%]">
          <div className="text-textGray text-xs w-[100%] h-[5%] flex justify-start items-center">
            GIFT CARDS
          </div>
          <div className="text-textGray flex justify-start items-center text-xl w-[100%] h-[10%]">
            YOGIC ESCAPE GIFT CARDS
          </div>
          <div className="text-textGray text-xs w-[100%] h-max py-3">
            You can&apos;t go wrong with a gift card. Choose anamount and write
            a personalized message to makethis gift your own.
          </div>
          <div className="w-[100%] h-max">
            <div className="text-textGray text-sm">Amount</div>
            <div className="flex h-full flex-wrap gap-x-5 gap-y-3 justify-around items-center w-full">
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
            <div className="text-textGray text-sm">For Whom</div>
            <div className="flex h-full flex-wrap gap-x-10 gap-y-3 justify-around items-center w-full"></div>
          </div>

          <div>form</div>
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
