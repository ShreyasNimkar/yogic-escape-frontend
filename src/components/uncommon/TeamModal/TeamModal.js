import React from "react";
import { useState } from "react";
import Image from "next/image";
const TeamModal = ({ id, visible, onClose }) => {
  const handleOnClose = (el) => {
    if (el.target.id === "modalcontainer") onClose();
  };
  if (!visible) return null;
  return (
    <div
      onClick={handleOnClose}
      id="modalcontainer"
      className="fixed inset-0 bg-black bg-opacity-[0.2] backdrop-blur-sm flex items-center justify-center"
    >
      <div className=" w-[90%] h-[90vh] py-16 bg-paleIvory flex justify-around items-center">
        <div className="w-[8%] h-full  flex justify-around items-end flex-col p-1">
          <svg
            width="25"
            height="25"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <path
              d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="w-[54%] h-full">
          <p className="py-1 text-xl">NEHA JAIN {id}</p>
          <p className="pb-8 text-mahogany italic">
            Yoga-Instructor & Healer{" "}
            <span className="text-xs text-dimGray not-italic"> 10yrs WEX</span>
          </p>
          <p className="text-xs">
            Neha is a certified Yoga Instructor, specialized in Vinyasa, Hatha,
            Ashtanga, Yin & the founder of Yogic Escape studio. Neha has been
            practicing Yoga & Meditation since childhood as part of her rooted
            family values and school curriculum. Neha started her career as a
            fashion designer in Bangalore, India & soon realized the path, she
            needs to take for the rest of her life. She moved to Rishikesh in
            the year 2017, the yoga capital of the world to complete her 200
            hours of intense Teachers Training Program in Ashtanga, Hatha -
            Vinyasa flow Yoga, from the renowned Himalayan Yoga Association
            (International Yoga Alliance). She has completed reiki healing
            certification from the reiki school of India. Since 2018, she has
            touched the lives of over 500 people as a visiting instructor in
            many reputed Yoga studios in Berlin. She has also conducted several
            workshops & retreats in & around Germany.She sincerely believes in
            the true meaning of Yoga which is the union of Atman (Soul) &
            Parmatman (True Consciousness). To become one with that ultimate
            truth, one needs to train their body & mind through Asana (Physical
            exercise), Dhyana (Meditation) & Pranayama (Breathing exercise).
            When in India, she dedicates most of her time to teaching Yoga to
            the underprivileged tribal kids as a way to give back to
            society.Besides Yoga, she loves to read, travel & sing.“You cannot
            always control what goes on outside. But you can always control what
            goes on inside.” so talk to your inner soul and get into
            mindfulness.
          </p>
        </div>
        <div className="w-[30%] h-full flex justify-around items-center">
          <Image
            src={"/profilePic.png"}
            alt="Team"
            height={10000}
            width={10000}
            className="w-full h-auto p-5 "
          />
        </div>
        <div className="w-[8%] h-full flex  justify-around items-start flex-col p-1">
          <svg
            width="25"
            height="25"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer "
          >
            <path
              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
              fill="#000000"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TeamModal;
