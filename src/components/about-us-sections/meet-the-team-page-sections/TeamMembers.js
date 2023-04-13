import React, { useState, useEffect } from "react";
import Image from "next/image";
import TeamCard from "@/components/uncommon/TeamCard/TeamCard";
import TeamModal from "@/components/uncommon/TeamModal/TeamModal";
import axios from "axios";
const TeamMembers = () => {
  const domain = process.env.NEXT_PUBLIC_DOMAIN;
  const [memberData, setmemberData] = useState([]);
  // console.log(memberData);
  const meetTheTeamController = async () => {
    const headers = {
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": true,
      // "Access-Control-Allow-Origin": "http://localhost:3000",
    };
    const URL = `https://${domain}/api/team-members?populate=*`;
    const res = await axios.get(URL, { headers });
    const members = res.data.data;
    setmemberData(members);
    console.log(members);
  };
  useEffect(() => {
    meetTheTeamController();
  }, []);
  const arr = [1, 2123123, 3123123, 4, 5, 6, 7, 8, 9];
  const [modalVisible, setModalVisible] = useState(null);
  const [modalData, setModalData] = useState([]);
  const handleModalOnClose = () => {
    setModalVisible(null);
  };
  return (
    <>
      <div className="h-full w-full bg-white bg-chakra-bg bg-[top_-13rem_right_-11rem] bg-no-repeat ">
        <div className="h-full w-full flex flex-wrap justify-around items-center px-10 py-32 gap-10">
          {memberData &&
            memberData.map((el) => (
              <TeamCard
                key={el.id}
                id={el.id}
                el={el}
                onClickFunc={(modalId) => {
                  setModalVisible(modalId);
                }}
                setModalDataFunc={(el) => {
                  setModalData(el);
                }}
              />
            ))}
        </div>
      </div>
      {modalVisible !== null && (
        <TeamModal
          onCloseFunc={handleModalOnClose}
          visible={true}
          id={modalVisible}
          modalData={modalData}
          setModalDataFunc={(el) => {
            setModalData(el);
          }}
          memberData={memberData}
        />
      )}
    </>
  );
};

export default TeamMembers;
