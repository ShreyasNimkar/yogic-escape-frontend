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

              <div className="hidden fixed group-hover:flex bg-transparent rounded-b-md top-[16.7vh] z-30  justify-around items-center flex-col">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                >
                  <path d="M4 9H11L7.5 4.5L4 9Z" fill="currentColor"></path>
                </svg>

                <div className="bg-white border-t-[0.1rem] border-mahogany h-full w-full ">
                  <div className="w-full text-black h-full gap-3 flex justify-around items-center flex-col p-8">
                    <div>MEET THE TEAM</div>
                    <div>WHO WE ARE</div>
                    <div>ROOM RENTALS</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative cursor-pointer hover:text-mahogany flex justify-around items-start flex-col">
              <div className="group-hover:underline">ABOUT US</div>

              <div className="hidden fixed group-hover:flex bg-transparent rounded-b-md top-[16.7vh] z-30  justify-around items-center flex-col">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                >
                  <path d="M4 9H11L7.5 4.5L4 9Z" fill="currentColor"></path>
                </svg>

                <div className="bg-white border-t-[0.1rem] border-mahogany w-[10rem] h-[10rem] ">
                  asd
                </div>
              </div>
            </div>
            <div className="group relative cursor-pointer hover:text-mahogany flex justify-around items-start flex-col">
              <div className="group-hover:underline">ABOUT US</div>

              <div className="hidden fixed group-hover:flex bg-transparent rounded-b-md top-[16.7vh] z-30  justify-around items-center flex-col">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                >
                  <path d="M4 9H11L7.5 4.5L4 9Z" fill="currentColor"></path>
                </svg>

                <div className="bg-white border-t-[0.1rem] border-mahogany w-[10rem] h-[10rem] ">
                  asd
                </div>
              </div>
            </div>
            <div className="group relative cursor-pointer hover:text-mahogany flex justify-around items-start flex-col">
              <div className="group-hover:underline">ABOUT US</div>

              <div className="hidden fixed group-hover:flex bg-transparent rounded-b-md top-[16.7vh] z-30  justify-around items-center flex-col">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                >
                  <path d="M4 9H11L7.5 4.5L4 9Z" fill="currentColor"></path>
                </svg>

                <div className="bg-white border-t-[0.1rem] border-mahogany w-[10rem] h-[10rem] ">
                  asd
                </div>
              </div>
            </div>
          </div>
          <div className="w-[35%] sm:w-1/5">
            <Image
              src="logo.svg"
              alt="logo"
              height={10000}
              width={10000}
              className="h-[4.6rem] w-full sm:h-[4.3rem] cursor-pointer"
            />
          </div>
          <div className="w-[35%] text-xs gap-3 hidden items-center justify-start lg:flex">
            <div className="group relative cursor-pointer hover:text-mahogany flex justify-around items-start flex-col">
              <div className="group-hover:underline">ABOUT US</div>

              <div className="hidden fixed group-hover:flex bg-transparent rounded-b-md top-[16.7vh] z-30  justify-around items-center flex-col">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                >
                  <path d="M4 9H11L7.5 4.5L4 9Z" fill="currentColor"></path>
                </svg>

                <div className="bg-white border-t-[0.1rem] border-mahogany w-[10rem] h-[10rem] ">
                  asd
                </div>
              </div>
            </div>
            <div className="group relative cursor-pointer hover:text-mahogany flex justify-around items-start flex-col">
              <div className="group-hover:underline">ABOUT US</div>

              <div className="hidden fixed group-hover:flex bg-transparent rounded-b-md top-[16.7vh] z-30  justify-around items-center flex-col">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                >
                  <path d="M4 9H11L7.5 4.5L4 9Z" fill="currentColor"></path>
                </svg>

                <div className="bg-white border-t-[0.1rem] border-mahogany w-[10rem] h-[10rem] ">
                  asd
                </div>
              </div>
            </div>
            <div className="group relative cursor-pointer hover:text-mahogany flex justify-around items-start flex-col">
              <div className="group-hover:underline">ABOUT US</div>

              <div className="hidden fixed group-hover:flex bg-transparent rounded-b-md top-[16.7vh] z-30  justify-around items-center flex-col">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                >
                  <path d="M4 9H11L7.5 4.5L4 9Z" fill="currentColor"></path>
                </svg>

                <div className="bg-white border-t-[0.1rem] border-mahogany w-[10rem] h-[10rem] ">
                  asd
                </div>
              </div>
            </div>
            <div className="group relative cursor-pointer hover:text-mahogany flex justify-around items-start flex-col">
              <div className="group-hover:underline">ABOUT US</div>

              <div className="hidden fixed group-hover:flex bg-transparent rounded-b-md top-[16.7vh] z-30  justify-around items-center flex-col">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                >
                  <path d="M4 9H11L7.5 4.5L4 9Z" fill="currentColor"></path>
                </svg>

                <div className="bg-white border-t-[0.1rem] border-mahogany w-[10rem] h-[10rem] ">
                  asd
                </div>
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
