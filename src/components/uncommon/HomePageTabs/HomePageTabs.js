import React from "react";
import { useState } from "react";
import EventsCard from "./EventsCard";
import { useEffect } from "react";
import axios from "axios";
const HomePageTabs = () => {
  const domain = process.env.NEXT_PUBLIC_DOMAIN;

  //bizz logic
  const [eventsData, seteventsData] = useState([]);
  const eventsController = async () => {
    const headers = {
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": true,
      // "Access-Control-Allow-Origin": "http://localhost:3000",
    };
    const URL = `https://${domain}/api/events?populate=*&sort=Date&pagination[pageSize]=2`;
    const res = await axios.get(URL, { headers });
    const members = res.data.data;
    seteventsData(members);
  };
  useEffect(() => {
    eventsController();
  }, []);

  //   const eventsData = members ? [...members] : [];

  const [retreatsData, setretreatsData] = useState([]);
  const retreatsController = async () => {
    const headers = {
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": true,
      // "Access-Control-Allow-Origin": "http://localhost:3000",
    };
    const URL = `https://${domain}/api/retreats?populate=*&sort=Date&pagination[pageSize]=2`;

    const res = await axios.get(URL, { headers });

    const members = res.data.data;
    setretreatsData(members);
  };
  useEffect(() => {
    eventsController();
  }, []);

  //   const retreatsData = members ? [...members] : [];

  //app logic
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="bg-transparent phone-container sm:container">
      <div className="bg-transparent bloc-tabs ">
        <button
          className={
            toggleState === 1
              ? "tabs active-tabs w-[40%] sm:w-[13%]"
              : "tabs w-[40%] sm:w-[13%]"
          }
          onClick={() => toggleTab(1)}
        >
          Events
        </button>
        <button
          className={
            toggleState === 2
              ? "tabs active-tabs w-[40%] sm:w-[13%]"
              : "tabs w-[40%] sm:w-[13%]"
          }
          onClick={() => toggleTab(2)}
        >
          Retreats
        </button>
      </div>

      <div className="bg-transparent content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content "}
        >
          <div className=" h-full w-full sm:w-[75%] bg-transparent flex justify-around items-center flex-col">
            {eventsData &&
              eventsData.map((el, index) => {
                return (
                  <>
                    <EventsCard key={el.id} props={el} />
                  </>
                );
              })}
          </div>
        </div>

        <div
          className={
            toggleState === 2
              ? "bg-transparent content  active-content"
              : "content"
          }
        >
          <div className="h-full w-full sm:w-[75%] bg-transparent flex justify-around items-center flex-col">
            {retreatsData &&
              retreatsData.map((el, index) => {
                return (
                  <>
                    <EventsCard key={index} props={el} />
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageTabs;
