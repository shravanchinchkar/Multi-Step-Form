import React, { useContext } from "react";
import { cardContext } from "../context/context";

const Footer = () => {
  const value = useContext(cardContext);
  const handleBack = () => {
    value.setsteps((prev) => prev - 1);
  };
  const handleFront = () => {
    value.setsteps((prev) => prev + 1);
  };
  return (
    <>
      <div className={value.steps<=2?"mt-[7rem] flex justify-between":"mt-[4rem] flex justify-between"}>
        <button
          className="ubuntu-medium text-[#9699ab] hover:text-[#02295a]"
          onClick={handleBack}
        >
          Go back
        </button>
        <button
          className="ubuntu-regular w-[100px] bg-[#02295a] hover:bg-[#473dff] text-white p-[0.5rem] rounded-lg"
          onClick={handleFront}
        >
          Next Step
        </button>
      </div>
    </>
  );
};

export default Footer;
