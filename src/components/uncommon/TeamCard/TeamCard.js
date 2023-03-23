import React from "react";
import Image from "next/image";
const TeamCard = ({ id, onClick }) => {
  return (
    <>
      <div
        index={0}
        onClick={() => onClick(id)}
        className="w-[80%] sm:w-[20%] h-full cursor-pointer"
      >
        <Image
          src={"/profilePic.png"}
          // src={"/chakra.svg"}
          alt="Team"
          height={10000}
          width={10000}
          className="h-[45vh] w-full object-cover"
        />
        <div className="text-xl mt-2 text-center">NEHA</div>
        <div className="text-sm text-center text-mahogany italic py-1">
          Yoga Instructor & Healer
        </div>
        <div className="text-sm not-italic text-dimGray text-center ">
          Designation
        </div>
      </div>
    </>
  );
};

export default TeamCard;
