import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import ReviewStars from "@/components/common/ReviewStars";
const MassagesCard = ({ props, id }) => {
  const router = useRouter();
  const onClickHandler = () => {
    router.push({
      pathname: "/massages/[slug]",
      query: {
        slug: id,
      },
    });
  };
  const domain = process.env.NEXT_PUBLIC_DOMAIN;

  return (
    <>
      <div className="h-max w-[45vw] sm:w-[25vw] sm:h-max shadow-md ">
        <div className="h-max overflow-hidden">
          <Image
            // src={`/c`}
            src={`http://${domain}${props.image.data.attributes.url}`}
            alt="Team"
            height={10000}
            width={10000}
            className="h-[16vh] sm:h-[25vh] w-full object-cover"
          />
        </div>
        <div className="h-max flex justify-around items-center py-2 sm:py-4 sm:px-3 bg-paleIvory">
          <div>
            <p className="text-sm">{props.name}</p>
            <p className="text-xs text-textGray py-2 sm:block hidden">
              {props.description}
            </p>
            <div className="flex justify-around items-center text-sm">
              {props.time}&nbsp;
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
              &nbsp;
              <ReviewStars rating={3.3} />
              <span className="hidden sm:block">20+ Reviews</span>
            </div>
            <p className="text-mahogany font-semibold">€{props.price}</p>
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

export default MassagesCard;
