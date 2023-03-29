import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";
import { useState } from "react";
function App() {
  const [makeLighterScreen, setMakeLighterScreen] = useState(false);

  const makeLighter = (e) => {
    e.preventDefault();
    setMakeLighterScreen(true);
  };

  return (
    <>
   {/*  className={valid ? "valid" : "invalid"} */}
   {/* className = {setMakeLighterScreen === true ? className={light : dark}} */}
    <div className="App">
      <div className="mode">
        <div onClick={makeLighter} className={setMakeLighterScreen === true ? "light" : "dark"}>
          Light
        </div>
        {/* <div className="d-mode">Light Mode</div> */}
      </div>
      <div className="light">
        <Header />
      </div>
     
    </div>
    </>
  );
}

export default App;
