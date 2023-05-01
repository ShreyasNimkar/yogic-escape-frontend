import React from "react";
import TherapiesCard from "../uncommon/MassageAndTherapiesCards/TherapiesCard";
import { useState, useEffect } from "react";
import axios from "axios";
const TherapiesList = () => {
  const domain = process.env.NEXT_PUBLIC_DOMAIN;
  const [therapiesData, setTherapiesData] = useState([]);
  const therapiesController = async () => {
    const headers = {
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": true,
      // "Access-Control-Allow-Origin": "http://localhost:3000",
    };
    const URL = `https://${domain}/api/therapies`;
    const res = await axios.get(URL, { headers });
    const therapies = res.data.data;
    console.log(therapies);
    setTherapiesData(therapies);
  };
  useEffect(() => {
    therapiesController();
    console.log(therapiesData);
  }, []);
  return (
    <>
      <div className="h-[30vh] flex justify-around items-center flex-col bg-white">
        <div className="h-[60%] flex justify-around items-center flex-col">
          <div className="flex w-full justify-center gap-10 items-center">
            <div className="w-[1/3] text-mahogany bg-50% p-[1rem] bg-ellipse-yellow-bg bg-no-repeat  bg-[top_0.6rem_left_0.6rem]">
              ALL
            </div>
            <div className="w-[1/3] text-mahogany bg-25% p-[1rem] bg-ellipse-yellow-bg bg-no-repeat  bg-[top_0.6rem_left_3.5rem]">
              BEST SELLING
            </div>
            <div className="w-[1/3] text-mahogany bg-40% p-[1rem] bg-ellipse-yellow-bg bg-no-repeat  bg-[top_0.6rem_left_0.8rem]">
              NEW
            </div>
          </div>
          <div className="flex justify-center text-textGray gap-4 text-xs items-center">
            {/*  */}
            <div className="rounded-full px-2 py-1 border-[0.1rem] border-textGray">
              Pregnancy
            </div>
            {/*  */}
          </div>
        </div>
      </div>
      <div className="h-full w-full bg-white">
        <div className="h-full w-full flex justify-center items-center flex-row sm:flex-row flex-wrap py-[2rem] px-[0.5rem] sm:px-[5rem] gap-x-5 gap-y-7">
          {therapiesData &&
            therapiesData.map((el) => (
              <TherapiesCard key={el.id} props={el.attributes} />
            ))}
        </div>
      </div>
    </>
  );
};

export default TherapiesList;
