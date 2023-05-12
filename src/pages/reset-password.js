import React from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import { useState, useEffect } from "react";
import postHandler from "@/request-handlers/postHandler";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

const ResetPassword = () => {
  const router = useRouter();
  const codeDictionary = router.query;
  console.log(codeDictionary);
  const code = Object.keys(codeDictionary)[0];
  console.log(code);
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setpasswordConfirmation] = useState("");
  const domain = process.env.NEXT_PUBLIC_DOMAIN;

  const URL = `https://${domain}/api/auth/reset-password`;
  const submitHandler = async () => {
    const formdata = new FormData();
    formdata.append("code", code);
    formdata.append("password", password);
    formdata.append("passwordConfirmation", passwordConfirmation);

    const res = await postHandler(URL, formdata, false);

    if (res.status === 1) {
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
  return (
    <>
      {" "}
      <ToastContainer />
      <div className="h-screen w-screen bg-paleIvory">
        <div className="w-full h-full flex sm:flex-row-reverse flex-col justify-around items-center">
          <div className="w-[100%] sm:w-1/2 h-[30%] sm:h-full flex justify-around items-center bg-chakra-bg bg-no-repeat bg-[top_-13rem_left_-13rem]">
            <Image
              height={100000}
              alt="logo"
              width={29999}
              src={"/Logo.png"}
              className="w-full h-[60%] sm:h-[40%] object-contain"
            />
          </div>
          <div className="w-[100%] sm:w-1/2 h-full flex justify-around items-center bg-chakra-bg bg-no-repeat bg-[bottom_-13rem_right_-13rem]">
            <div className="w-full h-[80%] flex justify-center gap-10 items-center flex-col">
              <div className="text-center">
                <p className="text-2xl text-mahogany">Forgot Password ?</p>
              </div>
              <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[80%]">
                <div className="mb-4">Please enter your registered Email</div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="password"
                    onChange={(v) => setPassword(v.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="confirmPassword"
                  >
                    Confirm Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="confirmPassword"
                    type="password"
                    placeholder="confirmPassword"
                    onChange={(v) => setpasswordConfirmation(v.target.value)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={() => {
                      submitHandler();
                    }}
                    className="flex justify-between items-center bg-white border-mahogany text-mahogany border-2  hover:bg-mahogany hover:text-white active:bg-mahogany font-bold uppercase text-xs  px-3 gap-1 py-1  outline-none focus:outline-none  ease-linear transition-all duration-150"
                    type="button"
                  >
                    <span className="sm:text-lg  pt-[0.25rem]">Next</span>
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
