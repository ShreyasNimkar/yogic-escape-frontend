import React from "react";
import InputTextField from "../common/InputTextField";
const PaymentLogin = () => {
  return (
    <>
      <div className="w-full h-full">
        <div className="text-mahogany text-center text-lg font-semibold h-[10%]">
          Guest Login in to Yogic Escape
        </div>
        <div className="h-[90%] flex justify-around items-center">
          <div className="w-[49%] h-full flex justify-around items-center">
            <div className="w-[50%] h-full ">
              <div className="h-[70%] w-full flex justify-center items-center flex-col">
                <p className="w-full">FULL NAME</p>
                <InputTextField label="ex: Neha" name="" type="text" />
                <br />
                <p className="w-full">MOBILE NO</p>
                <InputTextField
                  label="ex: +91 XXXXX XXXXX"
                  name=""
                  type="text"
                />
              </div>
              <div className="h-[30%] flex justify-center items-center flex-col gap-3">
                <button
                  className="flex justify-between items-center bg-paleIvory border-mahogany text-mahogany border-2  hover:bg-mahogany hover:text-white active:bg-mahogany font-bold uppercase text-xs  px-2 gap-1 py-1  outline-none focus:outline-none  ease-linear transition-all duration-150"
                  type="button"
                >
                  <span className="text-lg pt-[0.25rem]">LOGIN</span>
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
                SIGN UP | LOGIN{" "}
              </div>
            </div>
          </div>
          <div className="w-[2%] h-full flex flex-col justify-center items-center">
            <div className="h-[30%] w-[10%] bg-[#D9D9D9]"></div>
            <div className="h-[15%] w-full flex justify-around items-center text-center text-sm">
              OR
            </div>
            <div className="h-[30%] w-[10%] bg-[#D9D9D9]"></div>
          </div>
          <div className="w-[49%]">
            <div className="w-full h-full flex justify-center items-center flex-col gap-5">
              <button
                className="flex justify-between items-center bg-paleIvory border-textGray text-textGray border-2  hover:bg-mahogany hover:text-white active:bg-mahogany  text-xs  px-2 gap-1 py-1  outline-none focus:outline-none  ease-linear transition-all duration-150"
                type="button"
              >
                <span className="text-lg pt-[0.25rem]">
                  Continue with Google
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PaymentLogin;
