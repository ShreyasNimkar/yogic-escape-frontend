import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
const TherapiesCard = ({ props }) => {
  const domain = process.env.NEXT_PUBLIC_DOMAIN;
  const router = useRouter();
  const onClickHandler = () => {
    router.push({
      pathname: "/therapy",
      query: props.id,
    });
  };
  console.log(props);
  return (
    <>
      <div className="h-max  w-[45vw] sm:w-[25vw] sm:h-max shadow-md ">
        <div className="h-max  overflow-hidden">
          <Image
            src={`/chakra.svg`}
            // src={`http://${domain}${props.attributes.therapy_type.data.attributes.url}`}
            alt="Team"
            height={10000}
            width={10000}
            className="h-[16vh] sm:h-[25vh] w-full object-cover"
          />
        </div>
        <div className="h-max  flex justify-around items-center py-2 sm:py-4 sm:px-3 bg-paleIvory ">
          <div>
            <p className="text-sm">
              {props.attributes.therapy_type.data.attributes.name}
            </p>
            <p className="text-xs text-textGray py-2 sm:block hidden">
              {props.attributes.therapy_type.data.attributes.description}
            </p>
            <div className="flex justify-around items-center text-sm">
              {props.attributes.therapy_type.data.attributes.time}
              <svg
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-1/2"
              >
                <circle cx="4" cy="4.5" r="4" fill="#D9D9D9" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="18"
                viewBox="0 0 164 31"
                fill="none"
              >
                <path
                  d="M14.8667 2.85107L18.6946 10.6061L27.2548 11.8573L21.0608 17.8903L22.5226 26.4134L14.8667 22.3872L7.21079 26.4134L8.67259 17.8903L2.47852 11.8573L11.0387 10.6061L14.8667 2.85107Z"
                  fill="#F6C460"
                  stroke="#F6C460"
                  strokeWidth="2.47763"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M48.3139 2.85107L52.1419 10.6061L60.7021 11.8573L54.508 17.8903L55.9698 26.4134L48.3139 22.3872L40.6581 26.4134L42.1199 17.8903L35.9258 11.8573L44.486 10.6061L48.3139 2.85107Z"
                  fill="#F6C460"
                  stroke="#F6C460"
                  strokeWidth="2.47763"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M81.7632 2.85107L85.5911 10.6061L94.1513 11.8573L87.9572 17.8903L89.419 26.4134L81.7632 22.3872L74.1073 26.4134L75.5691 17.8903L69.375 11.8573L77.9352 10.6061L81.7632 2.85107Z"
                  fill="#F6C460"
                  stroke="#F6C460"
                  strokeWidth="2.47763"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M115.21 2.85107L119.038 10.6061L127.599 11.8573L121.405 17.8903L122.866 26.4134L115.21 22.3872L107.555 26.4134L109.016 17.8903L102.822 11.8573L111.382 10.6061L115.21 2.85107Z"
                  stroke="#F6C460"
                  strokeWidth="2.47763"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M148.66 2.85107L152.488 10.6061L161.048 11.8573L154.854 17.8903L156.316 26.4134L148.66 22.3872L141.004 26.4134L142.466 17.8903L136.271 11.8573L144.832 10.6061L148.66 2.85107Z"
                  stroke="#F6C460"
                  strokeWidth="2.47763"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="hidden sm:block">20+ Reviews</span>
            </div>
            <p className="text-mahogany font-semibold">
              €{props.attributes.therapy_type.data.attributes.price}
            </p>
            <button
              className="flex justify-between items-center text-mahogany border-[0.15rem] border-mahogany hover:bg-mahogany hover:text-white font-bold py-2 px-3 text-xs   outline-none focus:outline-none  ease-linear transition-all duration-150"
              type="button"
              onClick={() => {
                onClickHandler();
              }}
            >
              <span className="h-full w-full text-xs flex items-end justify-around ">
                BOOK
              </span>
              <svg
                width="15"
                height="15"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="block stroke-current"
              >
                <path
                  d="M8.24988 16.5L13.7499 11L8.24988 5.5"
                  // stroke="#ffffffff"
                  strokeWidth="1.83333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TherapiesCard;
