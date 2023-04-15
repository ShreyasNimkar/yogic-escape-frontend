import React from "react";
import Image from "next/image";
import Link from "next/link";
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

          <div className="w-[35%]  text-xs gap-3 hidden items-center justify-end lg:flex">
            {/*  */}
            <div className="group relative cursor-pointer hover:text-mahogany flex justify-around items-start flex-col w-[6vw]">
              <div className="group-hover:underline w-full text-center">
                ABOUT US
              </div>
              <div className="hidden cursor-default opacity-0 fixed group-hover:flex group-hover:opacity-100 group-hover:transition-all group-hover:duration-700 ease-out bg-transparent rounded-b-md top-[9.2vh] -flex-col-x-12 z-30  justify-around items-center flex-col w-[15vw]  -translate-x-[4.5vw]">
                <div className="bg-transparent  h-[5.6vh] w-full cursor-default"></div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-default"
                >
                  <path d="M4 9H11L7.5 4.5L4 9Z" fill="currentColor"></path>
                </svg>

                <div className="bg-white cursor-default border-t-[0.1rem] border-mahogany h-full w-full ">
                  <div className="w-full text-black h-full gap-3 flex justify-around items-center flex-col py-3 text-center">
                    <Link
                      href={"/meet-the-team"}
                      className="cursor-pointer hover:text-mahogany"
                    >
                      MEET THE TEAM
                    </Link>
                    <Link
                      href={"/who-we-are"}
                      className="cursor-pointer hover:text-mahogany"
                    >
                      WHO WE ARE
                    </Link>
                    <Link
                      href={"/rent-our-space"}
                      className="cursor-pointer hover:text-mahogany"
                    >
                      ROOM RENTALS
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative cursor-pointer hover:text-mahogany flex justify-around items-start flex-col w-[6vw]">
              <div className="group-hover:underline w-full text-center ">
                CLASSES
              </div>
              <div className="hidden cursor-default opacity-0 fixed group-hover:flex group-hover:opacity-100 group-hover:transition-all group-hover:duration-700 ease-out bg-transparent rounded-b-md top-[9.2vh] -flex-col-x-12 z-30  justify-around items-center flex-col w-[15vw] -translate-x-[4.5vw]  ">
                <div className="bg-transparent  h-[5.6vh] w-full cursor-default"></div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-default"
                >
                  <path d="M4 9H11L7.5 4.5L4 9Z" fill="currentColor"></path>
                </svg>

                <div className="bg-white cursor-default border-t-[0.1rem] border-mahogany h-full w-full ">
                  <div className="w-full text-black h-full gap-3 flex justify-around items-center flex-col py-3 text-center">
                    <Link
                      href={"https://www.yogicescape.de/classes"}
                      className="cursor-pointer hover:text-mahogany"
                    >
                      IN-STUDIO CLASSES
                    </Link>
                    <Link
                      href={"https://www.yogicescape.de/online-classes"}
                      className="cursor-pointer hover:text-mahogany"
                    >
                      ONLINE CLASSES
                    </Link>
                    <Link
                      href={"https://www.yogicescape.de/outdoor-classes"}
                      className="cursor-pointer hover:text-mahogany"
                    >
                      OUTDOOR CLASSES
                    </Link>
                    <Link
                      href={"https://www.yogicescape.de/prices"}
                      className="cursor-pointer hover:text-mahogany"
                    >
                      PRICES
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="group relative cursor-pointer hover:text-mahogany flex justify-around items-start flex-col w-[6vw]">
              <div className="group-hover:underline w-full text-center">
                TRAININGS
              </div>
              <div className="hidden cursor-default opacity-0 fixed group-hover:flex group-hover:opacity-100 group-hover:transition-all group-hover:duration-700 ease-out bg-transparent rounded-b-md top-[9.2vh] -flex-col-x-12 z-30  justify-around items-center flex-col w-[15vw] -translate-x-[4.5vw]  ">
                <div className="bg-transparent  h-[5.6vh] w-full cursor-default"></div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-default"
                >
                  <path d="M4 9H11L7.5 4.5L4 9Z" fill="currentColor"></path>
                </svg>

                <div className="bg-white cursor-default border-t-[0.1rem] border-mahogany h-full w-full ">
                  <div className="w-full text-black h-full gap-3 flex justify-around items-center flex-col  py-3">
                    <Link
                      href={"/sound-therapy"}
                      className="cursor-pointer hover:text-mahogany"
                    >
                      BECOME A SOUND HEALER
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="group relative cursor-pointer hover:text-mahogany flex justify-around items-start flex-col w-[6vw]">
              <div className="group-hover:underline w-full text-center">
                <Link
                  href={"/massages-and-therapies"}
                  className="cursor-pointer hover:text-mahogany"
                >
                  SERVICES
                </Link>
              </div>
              <div className="hidden cursor-default opacity-0 fixed group-hover:flex group-hover:opacity-100 group-hover:transition-all group-hover:duration-700 ease-out bg-transparent rounded-b-md top-[9.2vh] -flex-col-x-12 z-30  justify-around items-center flex-col w-[15vw] -translate-x-[4.5vw]  ">
                <div className="bg-transparent  h-[5.6vh] w-full cursor-default"></div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-default"
                >
                  <path d="M4 9H11L7.5 4.5L4 9Z" fill="currentColor"></path>
                </svg>

                <div className="bg-white cursor-default border-t-[0.1rem] border-mahogany h-full w-full ">
                  <div className="w-full text-black h-full gap-3 flex justify-around items-center flex-col  py-3">
                    <Link
                      href={"/massages"}
                      className="cursor-pointer hover:text-mahogany"
                    >
                      MASSAGES
                    </Link>
                    <Link
                      href={"/therapies"}
                      className="cursor-pointer hover:text-mahogany"
                    >
                      THERAPIES
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-around items-center w-[35%] sm:w-1/5">
            <Link href={"/"}>
              <Image
                href={"/"}
                src="/logo.png"
                alt="logo"
                height={10000}
                width={10000}
                className="h-full w-auto sm:h-[4.3rem] cursor-pointer"
              />
            </Link>
          </div>
          <div className="w-[35%] text-xs gap-3 hidden items-center justify-start lg:flex">
            {/*  */}
            <div className="group relative cursor-pointer hover:text-mahogany flex justify-around items-start flex-col w-[6vw]">
              <div className="group-hover:underline w-full text-center">
                EVENTS
              </div>
              <div className="hidden cursor-default opacity-0 fixed group-hover:flex group-hover:opacity-100 group-hover:transition-all group-hover:duration-700 ease-out bg-transparent rounded-b-md top-[9.2vh] -flex-col-x-12 z-30  justify-around items-center flex-col w-[15vw] -translate-x-[4.5vw]  ">
                <div className="bg-transparent  h-[5.6vh] w-full cursor-default"></div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-default"
                >
                  <path d="M4 9H11L7.5 4.5L4 9Z" fill="currentColor"></path>
                </svg>

                <div className="bg-white cursor-default border-t-[0.1rem] border-mahogany h-full w-full ">
                  <div className="w-full text-black h-full gap-3 flex justify-around items-center flex-col py-3  text-center ">
                    <Link
                      href={"/yoga-challenge"}
                      className="cursor-pointer hover:text-mahogany"
                    >
                      PICK YOUR YOGA <br /> CHALLENGE
                    </Link>
                    <Link
                      href={"/who-we-are"}
                      className="cursor-pointer hover:text-mahogany"
                    >
                      {/* WHO WE ARE */}
                    </Link>
                    <Link
                      href={"/rent-our-space"}
                      className="cursor-pointer hover:text-mahogany"
                    >
                      {/* ROOM RENTALS */}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative cursor-pointer hover:text-mahogany flex justify-around items-start flex-col w-[6vw]">
              <div className="group-hover:underline w-full text-center">
                RETREATS
              </div>
              <div className="hidden cursor-default opacity-0 fixed group-hover:flex group-hover:opacity-100 group-hover:transition-all group-hover:duration-700 ease-out bg-transparent rounded-b-md top-[9.2vh] -flex-col-x-20 z-30  justify-around items-center flex-col w-[15vw] -translate-x-[4.5vw]">
                <div className="bg-transparent  h-[5.6vh] w-full cursor-default"></div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-default"
                >
                  <path d="M4 9H11L7.5 4.5L4 9Z" fill="currentColor"></path>
                </svg>

                <div className="bg-white cursor-default border-t-[0.1rem] border-mahogany h-full w-full ">
                  <div className="w-full text-black h-full gap-3 flex justify-around items-center flex-col py-3 text-center">
                    <Link
                      href={"https://www.yogicescape.de/retreats"}
                      className="cursor-pointer hover:text-mahogany"
                    >
                      BRANDENBERG RETREAT
                    </Link>
                    <Link
                      href={"https://www.yogicescape.de/turkey-retreat"}
                      className="cursor-pointer hover:text-mahogany"
                    >
                      TURKEY RETREAT
                    </Link>
                    <Link
                      href={"https://www.yogicescape.de/india-retreat"}
                      className="cursor-pointer hover:text-mahogany"
                    >
                      INDIA RETREAT
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative cursor-pointer hover:text-mahogany flex justify-around items-start flex-col w-[6vw]">
              <div className="group-hover:underline w-full text-center">
                PODCAST
              </div>
              <div className="hidden cursor-default opacity-0 fixed group-hover:flex group-hover:opacity-100 group-hover:transition-all group-hover:duration-700 ease-out bg-transparent rounded-b-md top-[9.2vh] -flex-col-x-12 z-30  justify-around items-center flex-col w-[15vw] -translate-x-[4.5vw]  ">
                <div className="bg-transparent  h-[5.6vh] w-full cursor-default"></div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-default"
                >
                  <path d="M4 9H11L7.5 4.5L4 9Z" fill="currentColor"></path>
                </svg>

                <div className="bg-white cursor-default border-t-[0.1rem] border-mahogany h-full w-full ">
                  <div className="w-full text-black h-full gap-3 flex justify-around items-center flex-col py-3 text-center">
                    <Link
                      href={"/meet-the-team"}
                      className="cursor-pointer hover:text-mahogany"
                    >
                      {/* MEET THE TEAM */}
                    </Link>
                    <Link
                      href={"/who-we-are"}
                      className="cursor-pointer hover:text-mahogany"
                    >
                      {/* WHO WE ARE */}
                    </Link>
                    <Link
                      href={"/rent-our-space"}
                      className="cursor-pointer hover:text-mahogany"
                    >
                      {/* ROOM RENTALS */}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative cursor-pointer hover:text-mahogany flex justify-around items-start flex-col w-[6vw]">
              <div className="group-hover:underline w-full text-center">
                MORE
              </div>
              <div className="hidden cursor-default opacity-0 fixed group-hover:flex group-hover:opacity-100 group-hover:transition-all group-hover:duration-700 ease-out bg-transparent rounded-b-md top-[9.2vh]  z-30  justify-around items-center flex-col w-[15vw] -translate-x-[4.5vw]">
                <div className="bg-transparent  h-[5.6vh] w-full cursor-default"></div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-default"
                >
                  <path d="M4 9H11L7.5 4.5L4 9Z" fill="currentColor"></path>
                </svg>

                <div className="bg-white cursor-default border-t-[0.1rem] border-mahogany h-full w-full ">
                  <div className="w-full text-black h-full gap-3 flex justify-around items-center flex-col py-3 text-center">
                    <Link
                      href={"/meet-the-team"}
                      className="cursor-pointer hover:text-mahogany"
                    >
                      {/* MEET THE TEAM */}
                    </Link>
                    <Link
                      href={"/who-we-are"}
                      className="cursor-pointer hover:text-mahogany"
                    >
                      {/* WHO WE ARE */}
                    </Link>
                    <Link
                      href={"/rent-our-space"}
                      className="cursor-pointer hover:text-mahogany"
                    >
                      {/* ROOM RENTALS */}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[10%] flex lg:hidden items-center justify-around"></div>
        </div>
      </div>
      <div className="hidden lg:block h-[2vh] bg-white w-full"></div>
    </>
  );
};

export default Header;
