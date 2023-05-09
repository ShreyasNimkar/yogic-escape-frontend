import React from "react";
import Image from "next/image";
import { useState } from "react";

const BlogCard = () => {
  const [liked, setliked] = useState("none");
  const likeHandler = () => {
    if (liked == "none") {
      setliked("#9F2420");
    } else {
      setliked("none");
    }
  };
  return (
    <>
      <div className="w-[90%] pt-6 sm:px-6 my-5 h-max bg-white">
        <div className="sm:h-[10%] flex flex-col sm:flex-row  justify-start gap-2 items-start sm:items-center">
          <div className="w-full sm:w-[30%] h-full flex justify-start gap-2 items-center">
            <div className="h-full w-[16%] flex justify-start  items-center">
              <Image
                src={"/ourStory.png"}
                alt="Team"
                height={10000}
                width={10000}
                className="object-cover h-full w-[100%]"
              />
            </div>
            <div className="text-center text-sm flex justify-around items-center">
              YOGIC ESCAPE Berlin
            </div>
          </div>
          <div className="text-center text-textGray text-xs flex justify-around items-center">
            22 Oct 2023 | 2 mins read
          </div>
        </div>
        <div className="h-[15%] text-xl text-mahogany text-center  flex justify-start items-center">
          Practicing Pillars of Yoga
        </div>
        <div className="h-[50%] flex justify-around items-center">
          <div className="w-[80%] h-full">
            <div className="text-[#181818] h-max line-clamp-[4]  text-xs sm:text-sm">
              The 3 pillars of Practicing Yoga: Pranayama, Meditation and Asanas
              Yoga is a term that speaks to your body, soul and mind. It is an
              endless journey from you, to you and through you. While the
              practice of yoga may have begun for you.. The 3 pillars of
              Practicing Yoga: Pranayama, Meditation and Asanas Yoga is a term
              that speaks to your body, soul and mind. It is an endless journey
              from you, to you and through you. While the practice of yoga may
              have begun for you..
            </div>

            <div className="flex border-t-2 border-t-[#C4C4C4] py-2 justify-between gap-1 items-center h-[25%]">
              <div className="flex  justify-start gap-1 items-center h-full">
                <div className="flex text-xs text-textGray  justify-start items-center">
                  32 views | 0 comments | 3
                </div>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 19 19"
                  fill={`${liked}`}
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => {
                    likeHandler();
                  }}
                  className="cursor-pointer"
                >
                  <path
                    d="M15.7408 3.52204C15.355 3.13602 14.8969 2.82981 14.3927 2.62089C13.8885 2.41197 13.3481 2.30444 12.8023 2.30444C12.2565 2.30444 11.7161 2.41197 11.2119 2.62089C10.7077 2.82981 10.2496 3.13602 9.86373 3.52204L9.063 4.32277L8.26226 3.52204C7.48291 2.74268 6.42588 2.30485 5.32371 2.30485C4.22154 2.30485 3.16451 2.74268 2.38516 3.52204C1.6058 4.30139 1.16797 5.35842 1.16797 6.46059C1.16797 7.56276 1.6058 8.61979 2.38516 9.39914L3.18589 10.1999L9.063 16.077L14.9401 10.1999L15.7408 9.39914C16.1268 9.01331 16.4331 8.5552 16.642 8.051C16.8509 7.54679 16.9584 7.00636 16.9584 6.46059C16.9584 5.91481 16.8509 5.37438 16.642 4.87018C16.4331 4.36597 16.1268 3.90787 15.7408 3.52204Z"
                    stroke="#9F2420"
                    strokeWidth="1.51082"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer"
                >
                  <g clip-path="url(#clip0_805_8029)">
                    <path
                      d="M3.98047 9.10498V15.1133C3.98047 15.5117 4.13872 15.8937 4.42042 16.1754C4.70211 16.4571 5.08417 16.6154 5.48254 16.6154H14.495C14.8934 16.6154 15.2754 16.4571 15.5571 16.1754C15.8388 15.8937 15.9971 15.5117 15.9971 15.1133V9.10498"
                      stroke="#9F2420"
                      stroke-width="1.50208"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.9927 4.59888L9.98853 1.59473L6.98438 4.59888"
                      stroke="#9F2420"
                      stroke-width="1.50208"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.98828 1.59473V11.3582"
                      stroke="#9F2420"
                      stroke-width="1.50208"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_805_8029">
                      <rect
                        width="18.0249"
                        height="18.0249"
                        fill="white"
                        transform="translate(0.976562 0.0925293)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className="w-[55%] sm:w-[20%] h-[60%] sm:h-[90%] p-2">
            <Image
              src={"/ourStory.png"}
              alt="Team"
              height={10000}
              width={10000}
              className="object-cover sm:h-[16vh] h-[10vh] w-full"
            />
          </div>
        </div>
        <div className="h-max ">
          <span className="hover:cursor-pointer text-lg hover:text-mahogany hover:underline">
            Read More
          </span>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
