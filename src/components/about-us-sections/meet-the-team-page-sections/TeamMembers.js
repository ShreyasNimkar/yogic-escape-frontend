import React, { useState } from "react";
import Image from "next/image";
import TeamCard from "@/components/uncommon/TeamCard/TeamCard";
import TeamModal from "@/components/uncommon/TeamModal/TeamModal";

const TeamMembers = () => {
  const arr = [1, 2123123, 3123123, 4, 5, 6, 7, 8, 9];
  const [modalVisible, setModalVisible] = useState(null);
  const handleModalOnClose = () => {
    setModalVisible(null);
  };
  return (
    <>
      <div className="h-full w-full bg-white bg-chakra-bg bg-[top_-13rem_right_-11rem] bg-no-repeat ">
        <div className="h-full w-full flex flex-wrap justify-around items-center px-10 py-32 gap-10">
          {arr &&
            arr.map((id) => (
              <TeamCard
                key={id}
                id={id}
                onClick={(id) => {
                  setModalVisible(id);
                }}
              />
            ))}
        </div>
      </div>
      {modalVisible !== null && (
        <TeamModal
          onClose={handleModalOnClose}
          visible={true}
          id={modalVisible}
        />
      )}
    </>
  );
};

export default TeamMembers;
