import React from "react";
import MoreForYouCard from "../uncommon/MassageAndTherapiesCards/MoreForYouCard";
import Title from "../common/Title";
const MassagesAndTherapiesMoreForYou = () => {
  return (
    <>
      <Title color={"paleIvory"} value={"MORE FOR YOU"} />
      <div className="h-[45vh] bg-paleIvory">
        <div className="h-[100%] w-full flex justify-center gap-3 items-center bg-paleIvory">
          <MoreForYouCard />
          <MoreForYouCard />
        </div>
      </div>

      <Title color={"white"} value={"MORE FOR YOU"} />
      <div className="h-[45vh] bg-white">
        <div className="h-[100%] w-full flex justify-center gap-3 items-center bg-white">
          <MoreForYouCard />
          <MoreForYouCard />
        </div>
      </div>
    </>
  );
};

export default MassagesAndTherapiesMoreForYou;
