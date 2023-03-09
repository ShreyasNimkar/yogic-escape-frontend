import Image from "next/image";
import React from "react";

const PopUpNotification = () => {
  return (
    <>
      <div className=" w-full text-xs md:text-xs sm:h-[4vh] bg-warmGoldenYellow flex items-center justify-around ">
        <p className="text-[#3D3D3D] flex items-center justify-center">
          Upcoming! Learn how to be a Sound Healer with us on
          <span className="text-mahogany">18th of Feb</span>
          <Image
            src={"chevron-right.svg"}
            alt="chevron-right"
            height={1000}
            width={10}
            className="h-[0.75rem] w-[0.75rem]"
          />
        </p>
      </div>
    </>
  );
};

export default PopUpNotification;
