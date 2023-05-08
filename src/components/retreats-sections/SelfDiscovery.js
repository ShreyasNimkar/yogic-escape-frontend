import React from "react";
import SelfDiscoveryCard from "../uncommon/RetreatsCards/SelfDiscoveryCard";

const SelfDiscovery = () => {
  const cardsList = ["asd", "asd", "asd"];
  return (
    <>
      <div className="h-max w-full bg-paleYellowBiege flex justify-center flex-wrap gap-y-10 items-center py-10">
        {cardsList.map((el, index) => {
          if (index % 2 === 0)
            return (
              <>
                <SelfDiscoveryCard
                  direction={"flex-row"}
                  hamsaPosition={"left-0"}
                  textPadding={"pl-[5%]"}
                />
              </>
            );
          else {
            return (
              <>
                <SelfDiscoveryCard
                  direction={"flex-row-reverse"}
                  hamsaPosition={"right-0"}
                  textPadding={"pr-[5%]"}
                />
              </>
            );
          }
        })}
      </div>
    </>
  );
};

export default SelfDiscovery;
