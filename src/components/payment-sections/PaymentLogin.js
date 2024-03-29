import React from "react";
import InputTextField from "../common/InputTextField";
import postHandler from "@/request-handlers/postHandler";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PaymentLogin = ({ setTabNumber }) => {
  const router = useRouter();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const domain = process.env.NEXT_PUBLIC_DOMAIN;
  const URL = `https://${domain}/api/auth/local`;
  const submitHandler = async () => {
    const formdata = new FormData();
    formdata.append("identifier", identifier);
    formdata.append("password", password);

    const res = await postHandler(URL, formdata, false);

    if (res.status === 1) {
      Cookies.set("jwt", res.data.jwt);
      setTabNumber(1);
    } else if (res.status === 0) {
      toast.error(res.data.error.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  const signUpHandler = () => {
    router.push("/register");
  };

  useEffect(() => {
    const jwtCookie = Cookies.get("jwt");
    if (jwtCookie) {
      setTabNumber(1);
    }
  }, [setTabNumber]);
  return (
    <>
      <ToastContainer />
      <div className="w-full h-full">
        <div className="text-mahogany text-center text-lg font-semibold flex justify-around items-center h-[5%] sm:h-[10%]">
          <p>Login in to Yogic Escape</p>
        </div>
        <div className="h-[90%] sm:flex-row flex-col flex justify-around items-center">
          <div className="w-full sm:w-[49%] h-[60%] sm:h-full flex justify-around items-center">
            <div className="w-[80%] sm:w-[50%] h-full ">
              <div className="h-[65%] w-full flex justify-center gap-1 items-center flex-col">
                <p className="w-full">USERNAME / EMAIL</p>
                <InputTextField
                  label="ex: Neha"
                  name="identifier"
                  type="text"
                  onChange={(v) => setIdentifier(v.target.value)}
                />
                <br />
                <p className="w-full">PASSWORD</p>
                <InputTextField
                  label="ex: +91 XXXXX XXXXX"
                  name="password"
                  type="password"
                  onChange={(v) => setPassword(v.target.value)}
                />
              </div>
              <div className="h-[35%] flex justify-center items-center flex-col gap-3">
                <button
                  className="flex justify-between items-center bg-paleIvory border-mahogany text-mahogany border-2  hover:bg-mahogany hover:text-white active:bg-mahogany font-bold uppercase text-xs  px-3 gap-1 py-2  outline-none focus:outline-none  ease-linear transition-all duration-150"
                  type="button"
                  onClick={submitHandler}
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
                <div
                  onClick={() => {
                    signUpHandler();
                  }}
                  className="hover:text-mahogany hover:underline hover:cursor-pointer"
                >
                  SIGN UP
                </div>
              </div>
            </div>
          </div>
          <div className="sm:flex hidden  w-[2%] h-full  flex-col justify-center items-center">
            <div className="h-[30%] w-[10%] bg-[#D9D9D9]"></div>
            <div className="h-[15%] w-full flex justify-around items-center text-center text-sm">
              OR
            </div>
            <div className="h-[30%] w-[10%] bg-[#D9D9D9]"></div>
          </div>
          <div className="sm:hidden flex h-[5%] w-full justify-center items-center">
            <div className="h-[10%] w-[30%] bg-[#D9D9D9]"></div>
            <div className="h-full w-[20%] flex justify-around items-center text-center text-sm">
              OR
            </div>
            <div className="h-[10%] w-[30%] bg-[#D9D9D9]"></div>
          </div>
          <div className="w-[80%] sm:w-[49%] h-[20%] sm:h-full ">
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
