import React from "react";

const RentalSpaces = () => {
  return (
    <>
      <div className="h-[60vh] w-full bg-white">
        <div className="h-full w-full flex flex-col sm:flex-row justify-around items-center">
          <div className="w-[90%] h-[45%] sm:h-[70%] sm:w-[25%]">
            <div className="w-full h-[60%] sm:h-[60%]">
              <div className="h-full w-full bg-hero-section-bg bg-cover bg-no-repeat flex justify-around items-center text-white">
                <p className="bg-black bg-opacity-40 h-full w-full justify-around flex items-center text-2xl">
                  YOGA SHALLA
                </p>
              </div>
            </div>
            <div className="w-full flex sm:justify-around items-center h-[20%] sm:h-[20%] text-sm">
              Practice yoga in a decicated place with your peers
            </div>
            <div className="w-full h-[20%] text-mahogany ">
              <span className="cursor-pointer hover:underline">Learn More</span>
            </div>
          </div>
          <div className="w-[90%] h-[45%] sm:h-[70%] sm:w-[25%]">
            <div className="w-full h-[60%] sm:h-[60%]">
              <div className="h-full w-full bg-hero-section-bg bg-cover bg-no-repeat flex justify-around items-center text-white">
                <p className="bg-black bg-opacity-40 h-full text-center w-full justify-around flex items-center text-2xl">
                  WELLNESS <br />
                  STUDIO
                </p>
              </div>
            </div>
            <div className="w-full flex sm:justify-around items-center h-[20%] sm:h-[20%] text-sm">
              Practice yoga in a decicated place with your peers
            </div>
            <div className="w-full h-[20%] text-mahogany ">
              <span className="cursor-pointer hover:underline">Learn More</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RentalSpaces;
