import React from "react";
import Image from "next/image";
const PostHeroSection = () => {
  return (
    <>
      <div className="max-h-min flex items-center justify-start flex-col bg-white">
        <div className="h-max w-[100%] px-32 flex items-center justify-evenly gap-[6rem] mt-12">
          <div className="flex flex-col justify-start items-center gap-1">
            <div>
              <Image
                src="/chakra.svg"
                alt="red-chakra"
                height={10000}
                width={10000}
                className="h-[4rem] w-[4rem]"
              />
            </div>
            <div>OUR MISSION</div>
            <div className="h-full w-[100%] text-center">
              Having our roots from the land of Yoga, we intend to share
              traditional knowledge to achieve spiritual awakening
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostHeroSection;
