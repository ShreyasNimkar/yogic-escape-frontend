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

const Testimonials = () => {
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
      <div className=" text-center bg-white sm:w-[100%] h-[17vh]  font-semibold flex justify-center items-center flex-col bg-30% tracking-[0.15em] bg-no-repeat gap-2 bg-[center_bottom_2rem] text-2xl">
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
      <div className="h-[40vh] sm:h-[60vh]">
        <CarouselProvider
          className="h-[100%] w-full justify-around items-center"
          naturalSlideWidth={100}
          naturalSlideHeight={50}
          totalSlides={quotes.length}
          infinite={true}
          currentSlide={activeIndex}
          //   onSlideChange={handleSlideChange}
        >
          <div className="h-[90%] flex justify-around items-center">
            <ButtonBack className="h-full">
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
            <Slider className="h-[100%] w-[80%] ">
              {quotes.map((quote, index) => (
                <Slide index={0} key={index + 23421331}>
                  <div className="h-[200%] sm:h-full w-full text-center">
                    <div className="w-full h-[50%] sm:h-[30%] text-2xl font-Quasonnnn">
                      <p>{quote}</p>
                    </div>
                    <div className="w-full h-[50%] sm:h-[30%] text-mahogany">
                      ~Joulie, A doctor
                    </div>
                  </div>
                </Slide>
              ))}
            </Slider>
            <ButtonNext className="h-full">
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
    </>
  );
};

export default Testimonials;
