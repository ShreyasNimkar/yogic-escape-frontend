import React from "react";

const SelfDiscoveryTextBlocks = () => {
  return (
    <>
      <div className="justify-around items-center text-xs sm:h-full w-fit flex">
        <div className="h-full w-[15%] flex justify-around items-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 11L12 14L22 4"
              stroke="#9F2420"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16"
              stroke="#9F2420"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="h-full w-[85%] flex justify-center items-center flex-col">
          <div className="text-mahogany w-full">PRANAYAMA</div>
          <div className="w-full text-xs">
            Understanding the science of meditation and how to train the
            wandering mind to focus on one object, sound, breath, etc
          </div>
        </div>
      </div>
    </>
  );
};

export default SelfDiscoveryTextBlocks;
