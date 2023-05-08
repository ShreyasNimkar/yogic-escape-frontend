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
import Title from "../common/Title";

const MeetTheHost = () => {
  const domain = process.env.NEXT_PUBLIC_DOMAIN;

  console.log(domain);
  console.log(process.env.NEXT_PUBLIC_DOMAIN);
  const [memberData, setmemberData] = useState([]);
  const meetTheTeamController = async () => {
    const headers = {
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": true,
    };
    const URL = `https://${domain}/api/team-members?populate=*`;
    console.log(URL);
    const res = await axios.get(URL, { headers });

    const members = res.data.data;
    setmemberData(members);
  };
  useEffect(() => {
    meetTheTeamController();
  }, []);
  return (
    <>
      <div className="bg-white ">
        <Title color={"white"} value={"MEET THE HOSTS"} />
        <div className="h-[65vh] sm:h-[50vh] w-full  bg-transparent flex justify-around items-center">
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
                    className="stroke-mahogany hidden"
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
                <div className="w-full h-full mx-auto p-20 overflow-x-hidden overflow-y-hidden flex justify-around items-center">
                  <Slider>
                    <div
                      id="slider"
                      className="h-full w-full flex gap-14 md:gap-6 lg:gap-0 items-center justify-start transition ease-out duration-700"
                    >
                      {memberData &&
                        memberData.map((el, index) => {
                          return (
                            <>
                              <Slide
                                index={0}
                                key={el.id}
                                className="w-[80%] sm:w-[20%] h-full"
                              >
                                <div className="flex justify-around items-center flex-col p-10 w-full h-full">
                                  <Image
                                    src={`http://${domain}${el.attributes.Profile.data.attributes.url}`}
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
                    className="stroke-mahogany hidden"
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
                                  src={`http://${domain}${el.attributes.Profile.data.attributes.url}`}
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
              className="block md:hidden"
              naturalSlideWidth={0}
              // isIntrinsicHeight={true}
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
                      className="h-full w-full sm:mx-10 flex md:gap-6 lg:gap-8 items-center transition ease-out duration-700"
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
                                <div className="h-[80%] w-80% flex flex-col items-center justify-around">
                                  <Image
                                    src={`http://${domain}${el.attributes.Profile.data.attributes.url}`}
                                    // src={"/chakra.svg"}
                                    alt="Team"
                                    height={10000}
                                    width={10000}
                                    className="h-[40vh] w-[20rem] sm:h-[30vh] sm:w-full object-cover"
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
    </>
  );
};

export default MeetTheHost;
