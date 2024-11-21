import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { cardContext } from "./context/context";

function App() {
  const [steps, setsteps] = useState(1); // use to highlight the steps in the sidebar
  const [toggle, settoggle] = useState("left")//used for the toggle button 
  
  return (
    <>
      <cardContext.Provider value={{ steps, setsteps,toggle,settoggle}}>
        <div className="w-[100vw] h-[100vh] bg-[#bfe2fd] flex justify-center items-center">
          <Card />
        </div>
      </cardContext.Provider>
    </>
  );
}

export default App;
