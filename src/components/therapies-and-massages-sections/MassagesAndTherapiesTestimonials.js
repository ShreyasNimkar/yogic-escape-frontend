import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useState } from "react";

const MassagesAndTherapiesTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleSlideChange = (newIndex) => {
    console.log(newIndex);
    setActiveIndex(newIndex);
  };

  const quotes = [
    "“Our space is designed to help you escape this malignant lifestyle we have accepted as mundane”",
    "Quote 2",
    "Quote 3",
  ];
  return (
    <>
      <div className=" text-center bg-paleIvory sm:w-[100%] h-[17vh]  font-semibold flex justify-center items-center flex-col bg-30% tracking-[0.15em] bg-no-repeat gap-2 bg-[center_bottom_2rem] text-2xl">
        TESTIMONIALS
        <svg
          width="787"
          height="3"
          viewBox="0 0 787 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[80%] sm:w-1/4"
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
      <div className="h-[60vh] bg-paleIvory">
        <CarouselProvider
          className="h-full w-full justify-around items-center"
          naturalSlideWidth={100}
          naturalSlideHeight={50}
          totalSlides={quotes.length}
          infinite={true}
          currentSlide={activeIndex}
          //   onSlideChange={handleSlideChange}
        >
          <div className="h-[80%] flex justify-around items-center">
            <ButtonBack>
              <svg
                width="25"
                height="25"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
              >
                <path
                  d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </ButtonBack>
            <Slider className="h-[100%] w-[80%]">
              {quotes.map((quote, index) => (
                <Slide index={index} key={index}>
                  <div className="h-full   w-full text-center">
                    <div className="w-full font-Quasonnnn flex justify-around items-center h-[50%] text-2xl">
                      {quote}
                    </div>
                    <div className="w-full h-[50%] text-mahogany">
                      ~Joulie, A doctor
                    </div>
                  </div>
                </Slide>
              ))}
            </Slider>
            <ButtonNext>
              <svg
                width="25"
                height="25"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="#000000"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </ButtonNext>{" "}
          </div>
          <div className="w-full h-[10%] flex justify-center gap-0 items-center">
            {quotes.map((quote, index) => (
              <Dot
                className={`w-4 h-4 rounded-full mx-1 transition-all duration-500 ease-in-out`}
                slide={index}
                key={index}
              />
            ))}
          </div>
        </CarouselProvider>
      </div>
      <div className="flex justify-around items-end pb-3 h-[10vh] bg-white  ">
        <svg
          width="25"
          height="25"
          viewBox="0 0 48 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 8.71436H40C42.2 8.71436 44 10.5144 44 12.7144V36.7144C44 38.9144 42.2 40.7144 40 40.7144H8C5.8 40.7144 4 38.9144 4 36.7144V12.7144C4 10.5144 5.8 8.71436 8 8.71436Z"
            stroke="#9F2420"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M44 12.7144L24 26.7144L4 12.7144"
            stroke="#9F2420"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="h-[18vh] px-6 sm:px-0 pt-3 bg-white">
        <div className="w-full text-lg text-center text-mahogany pb-3 font-Quasonnnn">
          For any questions or queries please{" "}
          <span className="underline">Email</span>&nbsp; us or{" "}
          <span className="underline">call us.</span>
        </div>
        <div className="text-center text-textGray text-xs tracking-[0.2em] w-full">
          Upon receipt of your registration email, we will confirm your
          participation.
          <br /> The registration is binding once the payment is done.
        </div>
      </div>
    </>
  );
};

export default MassagesAndTherapiesTestimonials;
