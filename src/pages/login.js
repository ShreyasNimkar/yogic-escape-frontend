import React from "react";
import { useState } from "react";
import postHandler from "@/request-handlers/postHandler";

import Cookies from "js-cookie";
const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const domain = process.env.NEXT_PUBLIC_DOMAIN;
  const URL = `https://${domain}/api/auth/local`;
  const submitHandler = async () => {
    const formdata = new FormData();
    formdata.append("identifier", identifier);
    formdata.append("password", password);

    const res = await postHandler(URL, formdata, false);
    console.log(res);
    if (res.status === 1) {
      Cookies.set("jwt", res.data.jwt);
    }
  };
  return (
    <>
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="identifier"
            >
              Identifier
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="identifier"
              type="text"
              placeholder="identifier"
              onChange={(v) => setIdentifier(v.target.value)}
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
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={submitHandler}
            >
              Log In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
