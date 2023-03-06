import React from "react";
import Image from "next/image";
const SectionDivider = () => {
  return (
    <>
      <div className="flex-col flex justify-around items-start h-[20vh] relative">
        <div className="h-[10vh] w-full absolute top-0 bg-white"></div>
        <Image
          src="/chakra.svg"
          alt="red-chakra"
          height={10000}
          width={10000}
          className="h-[4rem] absolute w-full z-10"
        />
        <div className="h-[10vh] w-full absolute bottom-0 -z-10 bg-paleIvory"></div>
      </div>
    </>
  );
};

export default SectionDivider;
