import React from "react";
import Image from "next/image";
const Header = () => {
  const socialMediaNavigations = [
    { name: "facebook" },
    { name: "instagram" },
    { name: "youtube" },
    { name: "youtube" },
  ];

  return (
    <>
      <div className=" h-[10vh] bg-paleIvory lg:bg-offWhite lg:h-[16vh] w-[100vw]">
        <div className="w-full h-full flex justify-around items-center px-[6%] gap-[1rem] overflow-y-hidden">
          <div className="w-[10%] flex justify-around items-center lg:hidden ">
            <Image
              src={`hamburger.svg`}
              alt="nav-icon"
              height={100000}
              width={100000}
              className="h-[1.5rem] w-full"
            />
          </div>
          <div className="w-[4%] hidden justify-around items-center gap-1 lg:flex">
            {/* {socialMediaNavigations.map((value, index) => {
              return (
                <Image
                  src={`${value.name}.svg`}
                  key={index}
                  alt="nav-icon"
                  height={100}
                  width={100}
                  className="h-[1rem] w-[1rem]"
                />
              );
            })} */}
            <Image
              src={`shopping-bag.svg`}
              alt="nav-icon"
              height={100}
              width={100}
              className="h-[1.5rem] w-[1.5rem]"
            />
          </div>
          <div className="w-[30%] text-xs gap-3 hidden items-center justify-end lg:flex">
            <div>ABOUT US</div>
            <div>CLASSES</div>
            <div>TRAININGS</div>
            <div>THERAPIES</div>
          </div>
          <div className="w-[35%] sm:w-1/5">
            <Image
              src="logo.svg"
              alt="logo"
              height={10000}
              width={10000}
              className="h-[4.6rem] w-full sm:h-[4.3rem]"
            />
          </div>
          <div className="w-[30%] text-xs gap-3 hidden items-center justify-start lg:flex">
            <div>EVENTS</div>
            <div>RETREATS</div>
            <div>PODCASTS</div>
            <div>MORE</div>
          </div>
          <div className="w-[4%] flex items-center justify-around">
            {/* <Image
              src={`shopping-bag.svg`}
              alt="nav-icon"
              height={100}
              width={100}
              className="h-[1.5rem] w-[1.5rem]"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
