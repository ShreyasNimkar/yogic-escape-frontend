import React from "react";
import MoreForYouCard from "../uncommon/MassageAndTherapiesCards/MoreForYouCard";
import CallUs from "../common/CallUs";
import Title from "../common/Title";
const MassagesMoreForYou = () => {
  return (
    <>
      {" "}
      <Title color={"paleIvory"} value={"MORE FOR YOU"} />
      <div className="h-[45vh] bg-paleIvory">
        <div className="h-[100%] w-full flex justify-center gap-3 items-center bg-paleIvory">
          <MoreForYouCard />
          <MoreForYouCard />
        </div>
      </div>
    </>
  );
};

export default MassagesMoreForYou;
