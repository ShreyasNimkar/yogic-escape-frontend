import React from "react";
import { useState } from "react";
import postHandler from "@/request-handlers/postHandler";
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const domain = process.env.NEXT_PUBLIC_DOMAIN;

  const URL = `https://${domain}/api/auth/local/register`;
  const submitHandler = async () => {
    const formdata = new FormData();
    formdata.append("email", email);
    formdata.append("username", username);
    formdata.append("password", password);
    console.log(formdata);
    const res = await postHandler(URL, formdata, false);
    console.log(res);
    if (res.status === 1) {
      Cookies.set("jwt", res.data.jwt);
      router.push("/");
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
      <ToastContainer />
      <div className="h-screen w-screen bg-paleIvory">
        <div className="w-full h-full flex sm:flex-row flex-col justify-around items-center">
          <div className="w-[100%] sm:w-1/2 h-[30%] sm:h-full flex justify-around items-center bg-chakra-bg bg-no-repeat bg-[top_-13rem_left_-13rem]">
            <Image
              height={100000}
              alt="logo"
              width={29999}
              src={"/Logo.png"}
              className="w-full h-[60%] sm:h-[30%] object-contain"
            />
          </div>
          <div className="w-[100%] sm:w-1/2 h-full flex justify-around items-center bg-chakra-bg bg-no-repeat bg-[bottom_-13rem_right_-13rem]">
            <div className="w-full h-[80%] flex justify-center gap-3 items-center flex-col">
              <div className="text-center">
                <p className="text-2xl text-mahogany">Sign Up to YogicEscape</p>
                <p className="text-xs text-text-gray">Its quick and easy !</p>
              </div>
              <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[80%]">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="username"
                    onChange={(v) => setUsername(v.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="email"
                    onChange={(v) => setEmail(v.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******************"
                    onChange={(v) => setPassword(v.target.value)}
                  />
                  <p className="text-red-500 text-xs italic">
                    Please choose a password.
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="flex justify-between items-center bg-white border-mahogany text-mahogany border-2  hover:bg-mahogany hover:text-white active:bg-mahogany font-bold uppercase text-xs  px-3 gap-1 py-1  outline-none focus:outline-none  ease-linear transition-all duration-150"
                    type="button"
                    onClick={submitHandler}
                  >
                    <span className="sm:text-lg  pt-[0.25rem]">Register</span>
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
                  <a
                    className="inline-block align-baseline font-bold text-sm text-mahogany hover:text-textGray"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
