import React, { useContext } from "react";
import { cardContext } from "../context/context";
import Footer from "./Footer";

const FinishingUp = () => {
  const value = useContext(cardContext);
  return (
    <>
      <div
        className={
          value.steps === 4
            ? "p-[3rem] w-[565px] h-[565px] m-[1rem] rounded-2xl"
            : "hidden"
        }
        // className="p-[3rem] w-[565px] h-[565px] m-[1rem] rounded-2xl"
      >
        {/* Heading */}
        <div>
          <p className="ubuntu-bold text-3xl text-[#02295a]">Finishing up</p>
          <p className="ubuntu-regular text-[#9699ab]">
            Double-check everything looks OK before confirming
          </p>
        </div>

        {/* Main content */}
        <div className="mt-[3rem]">
          <ul className="flex flex-col gap-[1rem] p-[1.5rem] bg-[#fafbff] rounded-lg">
            <li className="flex justify-between border-b-[2px] pb-[1.5rem]">
              <div>
                <p className="ubuntu-medium text-[#02295a]">Arcade(Monthly)</p>
                <button className="underline ubuntu-regular text-[#9699ab] hover:text-[#473dff]">Change</button>
              </div>
              <div>
                <p className="ubuntu-bold text-[#02295a]">$9/mo</p>
              </div>
            </li>

            <li className="flex justify-between">
              <p className="ubuntu-regular text-[#9699ab]">Online Service</p>
              <p className="ubuntu-regular text-[#02295a]">+$1/mo</p>
            </li>

            <li className="flex justify-between">
              <p className="ubuntu-regular text-[#9699ab]">Larger Storage</p>
              <p className="ubuntu-regular text-[#02295a]">+$2/mo</p>
            </li>
          </ul>
        </div>

        <div className="flex justify-between p-[1rem]">
          <p className="ubuntu-medium text-sm text-[#9699ab]">Total (per month)</p>
          <p className="ubuntu-bold text-[#473dff]">+$12/mo</p>
        </div>

        <Footer/>
      </div>
    </>
  );
};

export default FinishingUp;
