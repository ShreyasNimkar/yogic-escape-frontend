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
              className="h-[1.5rem] w-[1.5rem] cursor-pointer"
            />
          </div>
          <div className="w-[35%] text-xs gap-3 hidden items-center justify-end lg:flex">
            <div className="group relative cursor-pointer hover:text-mahogany flex justify-around items-start flex-col">
              <div className="group-hover:underline">ABOUT US</div>
              <div className="hidden fixed group-hover:block w-[10rem] h-[10rem] bg-white rounded-b-md top-[20vh] z-30 border-t-[0.1rem] border-mahogany">
                <div></div>
              </div>
            </div>
            <div className="group relative cursor-pointer hover:text-mahogany flex justify-around items-start flex-col">
              <div className="group-hover:underline">CLASSES</div>
              <div className="hidden fixed group-hover:block w-[10rem] h-[10rem] bg-white rounded-b-md top-[20vh] z-30 border-t-[0.1rem] border-mahogany">
                <div></div>
              </div>
            </div>
            <div className="group relative cursor-pointer hover:text-mahogany flex justify-around items-start flex-col">
              <div className="group-hover:underline">TRAININGS</div>
              <div className="hidden fixed group-hover:block w-[10rem] h-[10rem] bg-white rounded-b-md top-[20vh] z-30 border-t-[0.1rem] border-mahogany">
                <div></div>
              </div>
            </div>
            <div className="group relative cursor-pointer hover:text-mahogany flex justify-around items-start flex-col">
              <div className="group-hover:underline">THERAPIES</div>
              <div className="hidden fixed group-hover:block w-[10rem] h-[10rem] bg-white rounded-b-md top-[20vh] z-30 border-t-[0.1rem] border-mahogany">
                <div></div>
              </div>
            </div>
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
          <div className="w-[35%] text-xs gap-3 hidden items-center justify-start lg:flex">
            <div className="group relative cursor-pointer  flex justify-around items-start flex-col">
              <div className="group-hover:underline hover:text-mahogany">
                EVENTS
              </div>
              <div className="hidden fixed group-hover:block w-[10rem] h-[10rem] bg-white rounded-b-md top-[20vh] z-30 border-t-[0.1rem] border-mahogany">
                <div></div>
              </div>
            </div>
            <div className="group relative cursor-pointer  flex justify-around items-start flex-col">
              <div className="group-hover:underline hover:text-mahogany">
                RETREATS
              </div>
              <div className="hidden fixed group-hover:block w-[10rem] h-[10rem] bg-white rounded-b-md top-[20vh] z-30 border-t-[0.1rem] border-mahogany">
                <div></div>
              </div>
            </div>
            <div className="group relative cursor-pointer  flex justify-around items-start flex-col">
              <div className="group-hover:underline hover:text-mahogany">
                PODCASTS
              </div>
              <div className="hidden fixed border-t-[0.1rem] border-mahogany group-hover:block w-[10rem] h-[10rem] bg-white rounded-b-md top-[20vh] z-30">
                <div>asd</div>
              </div>
            </div>
            <div className="group relative cursor-pointer  flex justify-around items-start flex-col">
              <div className="group-hover:underline hover:text-mahogany">
                MORE
              </div>
              <div className="hidden fixed group-hover:block w-[10rem] h-[10rem] bg-white rounded-b-md top-[20vh] z-30 border-t-[0.1rem] border-mahogany">
                <div></div>
              </div>
            </div>
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
      <div className="hidden lg:block h-[4vh] bg-white w-full"></div>
    </>
  );
};

export default Header;
