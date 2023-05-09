import React from "react";

const ReviewStars = ({ rating }) => {
  const ratingFunction = () => {
    const stars = [];
    for (let i = 1; i < 6; i++) {
      if (i > Math.round(rating)) {
        stars.push(
          <svg
            key={i}
            width="20"
            height="20"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.6596 2.85107L19.4876 10.6061L28.0478 11.8573L21.8537 17.8903L23.3155 26.4134L15.6596 22.3872L8.00376 26.4134L9.46556 17.8903L3.27148 11.8573L11.8317 10.6061L15.6596 2.85107Z"
              stroke="#F6C460"
              strokeWidth="2.47763"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      } else {
        stars.push(
          <svg
            key={i}
            width="20"
            height="20"
            viewBox="0 0 30 31"
            fill="#F6C460"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.8667 2.85107L18.6946 10.6061L27.2548 11.8573L21.0608 17.8903L22.5226 26.4134L14.8667 22.3872L7.21079 26.4134L8.67259 17.8903L2.47852 11.8573L11.0387 10.6061L14.8667 2.85107Z"
              stroke="#F6C460"
              strokeWidth="2.47763"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }
    }
    return stars;
  };
  return <>{ratingFunction()}</>;
};

export default ReviewStars;
