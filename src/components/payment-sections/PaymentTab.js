import React from "react";
import InputTextField from "../common/InputTextField";
import PaymentLogin from "./PaymentLogin";
import BookingConfirm from "./BookingConfirm";
import CalendarDiv from "./CalendarDiv";
const PaymentTab = () => {
  return (
    <>
      <div className="h-[80vh] bg-paleIvory w-full">
        <div className="w-full h-[25%] flex justify-around items-center">
          <div className="h-full w-[20%]">Back</div>
          <div className="h-full w-[60%] flex justify-around items-center">
            <div className="h-full w-[20%] flex justify-center items-center flex-col gap-2">
              <div className="flex justify-around items-end h-1/2 w-full">
                <svg
                  width="25"
                  height="26"
                  viewBox="0 0 25 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12.2437"
                    cy="13.0889"
                    r="12.1265"
                    fill="#9F2420"
                  />
                  <path
                    d="M10.2397 8.24016H13.1728V19.4609H11.5187V9.82608H10.2397V8.24016Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p className="text-sm text-center h-1/2">LOGIN</p>
            </div>
            <div className="h-full w-[20%] flex justify-around items-center">
              <div className="h-[2%] bg-[#D9D9D9] w-full"></div>
            </div>
            <div className="h-full w-[20%] flex justify-center items-center flex-col gap-2">
              <div className="flex justify-around items-end h-1/2 w-full">
                <svg
                  width="25"
                  height="26"
                  viewBox="0 0 25 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12.2437"
                    cy="13.0889"
                    r="12.1265"
                    fill="#9F2420"
                  />
                  <path
                    d="M10.2397 8.24016H13.1728V19.4609H11.5187V9.82608H10.2397V8.24016Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p className="text-sm text-center h-1/2">
                SELECT TIME & <br /> DATE
              </p>
            </div>
            <div className="h-full w-[20%] flex justify-around items-center">
              <div className="h-[2%] bg-[#D9D9D9] w-full"></div>
            </div>
            <div className="h-full w-[20%] flex justify-center items-center flex-col gap-2">
              <div className="flex justify-around items-end h-1/2 w-full">
                <svg
                  width="25"
                  height="26"
                  viewBox="0 0 25 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12.2437"
                    cy="13.0889"
                    r="12.1265"
                    fill="#9F2420"
                  />
                  <path
                    d="M10.2397 8.24016H13.1728V19.4609H11.5187V9.82608H10.2397V8.24016Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p className="text-sm text-center h-1/2">
                WE WILL
                <br />
                CONFIRM
              </p>
            </div>
          </div>
          <div className="h-full w-[20%]"></div>
        </div>
        {/* here */}
        <div className="w-full h-[75%]">
          {/* <PaymentLogin /> */}
          <CalendarDiv />
          {/* <BookingConfirm /> */}
        </div>
      </div>
    </>
  );
};

export default PaymentTab;
