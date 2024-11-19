import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { cardContext } from "./context/context";

function App() {
  const [steps, setsteps] = useState("active");

  return (
    <>
      <cardContext.Provider value={{ steps, setsteps }}>
        <div className="w-[100vw] h-[100vh] bg-[#bfe2fd] flex justify-center items-center">
          <Card />
        </div>
      </cardContext.Provider>
    </>
  );
}

export default App;
