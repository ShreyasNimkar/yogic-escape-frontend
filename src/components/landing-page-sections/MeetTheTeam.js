import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const MeetTheTeam = () => {
  const domain = process.env.NEXT_PUBLIC_DOMAIN;
  console.log(domain);
  console.log(process.env.NEXT_PUBLIC_DOMAIN);
  const [memberData, setmemberData] = useState([]);
  const meetTheTeamController = async () => {
    const headers = {
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": true,
      // "Access-Control-Allow-Origin": "http://localhost:3000",
    };
    const URL = `https://${domain}/api/team-members?populate=*`;

    const res = await axios.get(URL, { headers });

    const members = res.data.data;
    setmemberData(members);
  };
  useEffect(() => {
    meetTheTeamController();
  }, []);

  return (
    <>
      <div className="bg-white bg-chakra-team-bg bg-no-repeat bg-50% sm:bg-20% sm:bg-[left_bottom_13rem] bg-[left_bottom_20rem]">
        <div className="h-[20vh] bg-transparent">
          <div className="h-[60%] w-full text-center flex justify-center items-center flex-col text-2xl">
            MEET THE TEAM
            <svg
              width="787"
              height="3"
              viewBox="0 0 787 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[70%] sm:w-1/6"
            >
              <line
                x1="1.5"
                y1="1.5"
                x2="785.5"
                y2="1.5"
                stroke="#9F2420"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="h-[40%] w-[100%] flex justify-around items-center text-center">
            <div className="w-[90%] text-xs sm:text-base">
              YogicEscape is a space designed to help you escape this malignant
              lifestyle we have accepted as mundane with movement and prana
              (breath).
            </div>
          </div>
        </div>
        <div className="h-[65vh] sm:h-[60vh] w-full  bg-transparent flex justify-around items-center">
          <div className="h-[100%] sm:h-[100%] w-full flex flex-col sm:flex-row gap-3 justify-around items-center">
            <CarouselProvider
              className="lg:flex hidden h-full w-full  justify-around items-center"
              naturalSlideWidth={1000}
              isIntrinsicHeight={true}
              totalSlides={memberData.length}
              visibleSlides={4}
              step={4}
              infinite={true}
            >
              <div className=" mx-3 w-full h-full relative flex items-center justify-center">
                <ButtonBack
                  role="button"
                  aria-label="slide backward"
                  className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                  id="prev"
                >
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-mahogany"
                  >
                    <path
                      d="M7 1L1 7L7 13"
                      // stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ButtonBack>
                <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden flex justify-around items-center">
                  <Slider>
                    <div
                      id="slider"
                      className="h-full w-full flex gap-14 md:gap-6 lg:gap-8 items-center justify-start transition ease-out duration-700"
                    >
                      {memberData &&
                        memberData.map((el, index) => {
                          return (
                            <>
                              <Slide
                                index={0}
                                key={index + 456789}
                                className="w-[80%] sm:w-[20%] h-full"
                              >
                                <div className="flex justify-around items-center flex-col w-full h-full">
                                  <Image
                                    src={`https://${domain}${el.attributes.Profile.data.attributes.url}`}
                                    // src={"/chakra.svg"}
                                    alt="Team"
                                    height={10000}
                                    width={10000}
                                    className="h-[40vh] w-full object-cover"
                                  />
                                  <div className="text-xl mt-2 text-center">
                                    {el.attributes.Name}
                                  </div>
                                  <div className="text-xs text-center text-mahogany italic">
                                    {el.attributes.Designation}
                                  </div>{" "}
                                </div>
                              </Slide>
                            </>
                          );
                        })}
                    </div>
                  </Slider>
                </div>
                <ButtonNext
                  role="button"
                  aria-label="slide forward"
                  className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                  id="next"
                >
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    className="stroke-mahogany"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L7 7L1 13"
                      // stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ButtonNext>
              </div>
            </CarouselProvider>

            <CarouselProvider
              className="lg:hidden md:block hidden"
              naturalSlideWidth={1000}
              isIntrinsicHeight={true}
              totalSlides={memberData.length}
              visibleSlides={4}
              step={4}
              infinite={true}
            >
              <div className="w-full h-full relative flex items-center justify-center">
                <ButtonBack
                  role="button"
                  aria-label="slide backward"
                  className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                  id="prev"
                >
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-mahogany"
                  >
                    <path
                      d="M7 1L1 7L7 13"
                      // stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ButtonBack>
                <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden flex justify-around items-center">
                  <Slider>
                    <div
                      id="slider"
                      className="h-full w-full flex gap-14 md:gap-6 lg:gap-8 items-center justify-start transition ease-out duration-700"
                    >
                      {memberData &&
                        memberData.map((el, index) => {
                          return (
                            <>
                              <Slide
                                index={0}
                                key={index}
                                className="w-[80%] sm:w-[20%] h-full"
                              >
                                <Image
                                  src={`https://${domain}${el.attributes.Profile.data.attributes.url}`}
                                  // src={"/chakra.svg"}
                                  alt="Team"
                                  height={10000}
                                  width={10000}
                                  className="h-[30vh] w-full object-cover"
                                />
                                <div className="text-xl mt-2 text-center">
                                  {el.attributes.Name}
                                </div>
                                <div className="text-xs text-center text-mahogany italic">
                                  {el.attributes.Designation}
                                </div>
                              </Slide>
                            </>
                          );
                        })}
                    </div>
                  </Slider>
                </div>
                <ButtonNext
                  role="button"
                  aria-label="slide forward"
                  className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                  id="next"
                >
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    className="stroke-mahogany"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L7 7L1 13"
                      // stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ButtonNext>
              </div>
            </CarouselProvider>

            {/* Carousel for mobile and Small size Devices */}
            <CarouselProvider
              className="block md:hidden mr-20"
              naturalSlideWidth={100}
              isIntrinsicHeight={true}
              totalSlides={memberData.length}
              visibleSlides={1}
              step={1}
              infinite={true}
            >
              <div className="w-full h-full relative flex items-center justify-center">
                <ButtonBack
                  role="button"
                  aria-label="slide backward"
                  className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer hidden"
                  id="prev"
                >
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-mahogany"
                  >
                    <path
                      d="M7 1L1 7L7 13"
                      // stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ButtonBack>
                <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden flex justify-around items-center">
                  <Slider>
                    <div
                      id="slider"
                      className="h-full w-full mx-10 flex md:gap-6 lg:gap-8 items-center transition ease-out duration-700"
                    >
                      {memberData &&
                        memberData.map((el, index) => {
                          return (
                            <>
                              <Slide
                                index={0}
                                key={index + 2344}
                                className="w-[80%] sm:w-[20%] h-full"
                              >
                                <div className="h-[80%] w-80% flex flex-col items-center justify-around">
                                  <Image
                                    src={`https://${domain}${el.attributes.Profile.data.attributes.url}`}
                                    // src={"/chakra.svg"}
                                    alt="Team"
                                    height={10000}
                                    width={10000}
                                    className="h-full w-[20rem] sm:h-[30vh] sm:w-full object-cover"
                                  />
                                  <div className="text-xl mt-2 text-center">
                                    {el.attributes.Name}
                                  </div>
                                  <div className="text-xs text-center text-mahogany italic">
                                    {el.attributes.Designation}
                                  </div>
                                </div>
                              </Slide>
                            </>
                          );
                        })}
                    </div>
                  </Slider>
                </div>
                <ButtonNext
                  role="button"
                  aria-label="slide forward"
                  className="hidden absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                  id="next"
                >
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    className="stroke-mahogany"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L7 7L1 13"
                      // stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ButtonNext>
              </div>
            </CarouselProvider>
          </div>
        </div>
      </div>
      <div className="h-[10vh] flex justify-around items-center">
        <button
          className="flex justify-around items-center bg-mahogany border-mahogany text-white border-2  hover:bg-paleIvory hover:text-mahogany active:bg-mahogany font-bold uppercase text-xs  px-3 gap-1 py-2  outline-none focus:outline-none  ease-linear transition-all duration-150"
          type="button"
        >
          <span className="text-base pt-[0.25rem]">LEARN</span>
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
    </>
  );
};

export default MeetTheTeam;
