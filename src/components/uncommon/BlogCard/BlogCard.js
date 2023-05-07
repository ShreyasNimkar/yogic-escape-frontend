import React from "react";
import Image from "next/image";

const BlogCard = () => {
  return (
    <>
      <div className="w-[90%] pt-6 sm:px-6 h-[45vh] bg-white">
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
            <div className="text-[#181818] h-[60%]  text-xs sm:text-sm">
              The 3 pillars of Practicing Yoga: Pranayama, Meditation and Asanas
              Yoga is a term that speaks to your body, soul and mind. It is an
              endless journey from you, to you and through you. While the
              practice of yoga may have begun for you..
            </div>
            <div className="h-[15%]">----------------------</div>
            <div className="flex justify-start gap-1 items-center h-[15%]">
              <div className="flex text-textGray text-xs justify-start items-center">
                32 views | 0 comments | 3
              </div>

              <svg
                width="12"
                height="12"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.7408 3.52204C15.355 3.13602 14.8969 2.82981 14.3927 2.62089C13.8885 2.41197 13.3481 2.30444 12.8023 2.30444C12.2565 2.30444 11.7161 2.41197 11.2119 2.62089C10.7077 2.82981 10.2496 3.13602 9.86373 3.52204L9.063 4.32277L8.26226 3.52204C7.48291 2.74268 6.42588 2.30485 5.32371 2.30485C4.22154 2.30485 3.16451 2.74268 2.38516 3.52204C1.6058 4.30139 1.16797 5.35842 1.16797 6.46059C1.16797 7.56276 1.6058 8.61979 2.38516 9.39914L3.18589 10.1999L9.063 16.077L14.9401 10.1999L15.7408 9.39914C16.1268 9.01331 16.4331 8.5552 16.642 8.051C16.8509 7.54679 16.9584 7.00636 16.9584 6.46059C16.9584 5.91481 16.8509 5.37438 16.642 4.87018C16.4331 4.36597 16.1268 3.90787 15.7408 3.52204Z"
                  stroke="#9F2420"
                  stroke-width="1.51082"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="w-[55%] sm:w-[20%] h-[60%] sm:h-[90%] p-2">
            <Image
              src={"/ourStory.png"}
              alt="Team"
              height={10000}
              width={10000}
              className="object-cover h-full w-full"
            />
          </div>
        </div>
        <div className="h-[20%] ">
          <span className="hover:cursor-pointer text-lg hover:text-mahogany hover:underline">
            Read More
          </span>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
