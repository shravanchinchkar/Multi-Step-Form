import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { cardContext } from "./context/context";

function App() {
  const [steps, setsteps] = useState(1); // use to highlight the steps in the sidebar
  const [toggle, settoggle] = useState("left"); //used for the toggle button
  const [totalBill, settotalBill] = useState([]); //It's the array of object which consist of summary of Selected Plan
  const [finalAddons, setfinalAddons] = useState([]); //It's the array of object which consist of summary of Addons
  const [displayThankyou, setdisplayThankyou] = useState(false);
  return (
    <>
      <cardContext.Provider
        value={{
          steps,
          setsteps,
          toggle,
          settoggle,
          totalBill,
          settotalBill,
          finalAddons,
          setfinalAddons,
          displayThankyou,
          setdisplayThankyou,
        }}
      >
        <div className="w-[100vw] h-[100vh] bg-[#bfe2fd] flex justify-center items-center">
          <Card />
        </div>
      </cardContext.Provider>
    </>
  );
}

export default App;
