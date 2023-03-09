import React from "react";
import Image from "next/image";
const SectionDivider = () => {
  return (
    <>
      <div className="flex-col flex justify-around items-start h-[10vh] relative overflow-hidden">
        <div className="h-[5vh] w-full absolute -z-10 top-0 bg-white overflow-hidden"></div>
        <Image
          src="/chakra.svg"
          alt="red-chakra"
          height={10000}
          width={10000}
          className="h-[4rem] absolute w-full z-10"
        />
        <div className="h-[5vh] w-full absolute bottom-0 -z-10 bg-paleIvory"></div>
      </div>
    </>
  );
};

export default SectionDivider;
