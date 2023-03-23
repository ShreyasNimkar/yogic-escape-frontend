import React from "react";
import Image from "next/image";
const TeamCard = ({ el, id, onClickFunc, setModalDataFunc }) => {
  const domain = process.env.NEXT_PUBLIC_DOMAIN;

  return (
    <>
      <div
        index={0}
        onClick={() => {
          onClickFunc(id);
          setModalDataFunc(el);
        }}
        className="w-[80%] sm:w-[20%] h-full cursor-pointer"
      >
        <Image
          src={`https://${domain}${el.attributes.Profile.data.attributes.url}`}
          // src={"/chakra.svg"}
          alt="Team"
          height={10000}
          width={10000}
          className="h-[45vh] w-full object-cover"
        />
        <div className="text-xl mt-2 text-center">{el.attributes.Name}</div>
        <div className="text-sm text-center text-mahogany italic py-1">
          {el.attributes.Designation}
        </div>
        <div className="text-sm not-italic text-dimGray text-center ">
          {el.attributes.Experience}
        </div>
      </div>
    </>
  );
};

export default TeamCard;
