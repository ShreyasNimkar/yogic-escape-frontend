import React from "react";
import Image from "next/image";
const LearningCard = () => {
  return (
    <>
      <div className="h-[100%] w-[25%] flex justify-end  items-center flex-col z-1 relative">
        <div className="w-[100%] h-[90%] relative z-2 bg-white border-2 border-mahogany"></div>
        <Image
          src="/hamsa-leaning-left.svg"
          alt="red-chakra"
          height={10000}
          width={10000}
          className="h-[4rem] absolute top-[0] w-full z-20"
        />
      </div>
    </>
  );
};

export default LearningCard;
