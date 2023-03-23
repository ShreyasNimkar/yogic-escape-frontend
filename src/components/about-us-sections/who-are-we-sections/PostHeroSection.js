import React from "react";
import Image from "next/image";
import SectionDivider from "@/components/common/SectionDivider";
const PostHeroSection = () => {
  return (
    <>
      <div className="bg-white w-full ">
        <div className="h-[10vh] text-2xl w-full flex justify-around items-center">
          HOW WE STARTED
        </div>
        <div className="h-[50vh] w-[100%] flex justify-around items-center">
          <p className="w-[80%] sm:w-[60%]">
            When{" "}
            <span className="text-mahogany">
              three Indians met in a foreign land
            </span>
            , they found a purpose of their living. Coming from a strong yogic
            and spiritual background, Neha, Sanjeev, and Dhiraj, crossed their
            paths in Berlin – the city where anything is possible.
            <br />
            <span className="text-mahogany">
              In 2018, Neha founded and began the journey of Yogic Escape
            </span>{" "}
            . Renting places in and around Berlin, Neha touched many lives
            through her art of Yoga and{" "}
            <span className="text-mahogany">
              {" "}
              created a respectable community{" "}
            </span>{" "}
            of like-minded individuals. It was through this journey that Neha
            met Sanjeev and Dhiraj. And within a few conversations, they knew
            exactly the kind of space they longed for and wished to create. And
            that
            <span className="text-mahogany">
              {" "}
              marked the rebirth of Yogic Escape Yoga &Wellness Studio
            </span>
            .
          </p>
        </div>
      </div>
      <SectionDivider />
      <div className=" bg-paleIvory h-full w-full">
        <div className="text-center font-wondarQuason tracking-[0.2rem] h-[40vh] w-full bg-chakra-bg bg-center bg-no-repeat bg-contain flex items-center justify-around my-5 ">
          <div className="sm:w-[60%] text-3xl">
            Yogic Escape is a space designed to embrace all aspects of life,
            Mental (mind), physical (body) and spiritual (soul).
          </div>
        </div>
      </div>
      <div className="h-[20vh] text-2xl w-full flex justify-around items-center">
        WHO WE ARE
      </div>
      <div className="my-10 gap-2 sm:mt-0 sm:h-[40vh] flex flex-col sm:flex-row items-center justify-around sm:justify-evenly  bg-white">
        <div className="h-[20vh] sm:h-full w-[90%] sm:w-[20%] flex items-center justify-around ">
          <div className="h-full bg-20% sm:bg-50% lg:bg-30% bg-hamsa-bg bg-no-repeat bg-[center_top_2rem] sm:bg-[center_top_8rem] lg:bg-[center_top_3rem]  flex flex-col justify-start items-center w-[100%] relative">
            <div className="h-[55%] sm:h-[50%] text-xl flex justify-end items-center flex-col">
              MINDFULLNESS
            </div>
            <div className="h-[45%] sm:h-[50%] w-[100%] sm:w-[100%] text-center text-sm flex justify-around items-start">
              Focusing on mindfulness, love, and harmony, Yogic Escape intends
              to help you escape this malignant lifestyle we have accepted as
              mundane with movement and prana (breath).
            </div>
          </div>
        </div>
        <div className="h-[20vh] sm:h-full w-[90%] sm:w-[20%] flex items-center justify-around ">
          <div className="h-full bg-50% sm:bg-100% lg:bg-70% bg-lotus-bg bg-no-repeat bg-[center_top_2rem] sm:bg-[center_top_6rem] lg:bg-[center_top_1.5rem]  flex flex-col justify-start items-center w-[100%] relative">
            <div className="h-[55%] sm:h-[50%] text-xl flex justify-end items-center flex-col text-center">
              BUILT A COMMUNITY
            </div>
            <div className="h-[45%] sm:h-[50%] w-[100%] sm:w-[100%] text-center text-sm flex justify-around items-start">
              Over the years, Yogic Escape has built a sacred community nurtured
              with love, respect and yoga. But the journey has only begun.
            </div>
          </div>
        </div>
        <div className="h-[20vh] sm:h-full w-[90%] sm:w-[20%] flex items-center justify-around ">
          <div className="h-full bg-20% sm:bg-50% lg:bg-30% bg-moon-bg bg-no-repeat bg-[center_top_2rem] sm:bg-[center_top_8rem] lg:bg-[center_top_3rem]  flex flex-col justify-start items-center w-[100%] relative">
            <div className="h-[55%] sm:h-[50%] text-xl flex justify-end items-center flex-col text-center">
              CATERS TO NEEDS
            </div>
            <div className="h-[45%] sm:h-[50%] w-[80%] sm:w-[100%] text-center text-sm flex justify-around items-start">
              Yogic Escape caters to the needs of various clients with more than
              10 different types of classes in the spectrum of mindfulness,
              healing, asanas and Prana (breath).
            </div>
          </div>
        </div>
      </div>
      <div className="h-[50vh] w-[100%] flex justify-around items-center">
        <p className="w-[80%] sm:w-[60%]">
          Yogic Escape understands that yoga isn’t just about ideologies or
          religion nor our physical appearances. Yogic Escape builds on the
          foundation of spirituality, mindfulness and calmness, keeping the
          essence of yoga alive.
          <br /> Over the years, Yogic Escape has{" "}
          <span className="text-mahogany">built a sacred</span>
          community nurtured with love, respect and yoga. But the journey has
          only begun. Yogic Escape caters to the needs of various clients with
          more than{" "}
          <span className="text-mahogany">10 different types of classes </span>
          in the spectrum of mindfulness, healing, asanas and Prana (breath).
          Offering private classes in Reiki, Sound bath, healing therapies and
          Massages. Embracing the sustainable lifestyle of Yoga, Yogic Escape
          also offers sustainable products for daily use.
        </p>
      </div>
    </>
  );
};

export default PostHeroSection;
