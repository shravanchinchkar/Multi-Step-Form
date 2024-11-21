import React from "react";
import SideBar from "./SideBar";
import PersonalInfo from "./PersonalInfo";
import Plan from "./Plan";

const Card = () => {

  return (
    <div className="bg-white w-[900px] h-[600px] rounded-2xl flex">
      {/* Left Content which consist of sidebar */}
      <SideBar/>

      {/* Right box which consist of different content  */}
      <PersonalInfo/>
      <Plan/>
    </div>
  );
};

export default Card;
