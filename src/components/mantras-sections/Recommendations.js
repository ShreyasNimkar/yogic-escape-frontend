import React from "react";
import MantrasCard from "../uncommon/MantrasCard/MantrasCard";
import Title from "../common/Title";
import { useState, useEffect } from "react";
import axios from "axios";
const Recommendations = () => {
  const domain = process.env.NEXT_PUBLIC_DOMAIN;

  const [mantraData, setMantraData] = useState([]);

  const mantrasController = async () => {
    const headers = {
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": true,
    };
    const URL = `https://${domain}/api/mantras`;
    const res = await axios.get(URL, { headers });
    const blogs = res.data.data;
    setMantraData(blogs);
    console.log(blogs);
  };
  useEffect(() => {
    mantrasController();
  }, []);
  return (
    <>
      <Title color={"whtie"} value={"OUR RECOMMENDATIONS"} />
      <div className="h-full">
        <div className="h-max py-10 flex justify-center gap-3 sm:gap-0 items-center flex-wrap sm:gap-x-10 ">
          {mantraData &&
            mantraData.map((el, index) => {
              return (
                <React.Fragment key={index}>
                  <MantrasCard el={el} />
                </React.Fragment>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Recommendations;
