import './App.css';

import {useState, useEffect} from "react";

import workIt from "./assets/WorkIt.m4a";
import makeIt from "./assets/MakeIt.m4a";
import doIt from "./assets/DoIt.m4a";
import makesUs from "./assets/MakesUs.m4a";
import harder from "./assets/Harder.m4a";
import better from "./assets/Better.m4a";
import faster from "./assets/Faster.m4a"
import stronger from "./assets/Stronger.m4a";
import moreThan from "./assets/MoreThan.m4a";
import ever from "./assets/Ever.m4a";
import workIs from "./assets/WorkIs.m4a";
import over from "./assets/Over.m4a";
import Pad from './components/pad';

function App() {
  const [display, setDisplay] = useState("Play your sound");
  useEffect(() => {
    const handleKeyDown = (e) => {
      const keyPressed = e.keyCode;
      let sound = "";
      switch(keyPressed) {
        case 65:
          sound = workIt;
          setDisplay("Work it");
          break;
        case 90:
          sound = makeIt;
          setDisplay("Make it");
          break;
        case 69:
          sound = doIt;
          setDisplay("Do it");
          break;
        case 82:
          sound = makesUs;
          setDisplay("Makes us");
          break;
        case 81:
          sound = harder;
          setDisplay("Harder");
          break;
        case 83:
          sound = better;
          setDisplay("Better");
          break;
        case 68:
          sound = faster;
          setDisplay("Faster");
          break;
        case 70:
          sound = stronger;
          setDisplay("Stronger");
          break;
        case 87:
          sound = moreThan;
          setDisplay("More than");
          break;
        case 88:
          sound = ever;
          setDisplay("Ever");
          break;
        case 67:
          sound = workIs;
          setDisplay("Work is");
          break;
        case 86:
          sound = over;
          setDisplay("Over");
          break;
        default:
          console.log("Keep pressing AZER QSDF WXCV")
      }
      if (sound !== "") {
        const audio = new Audio(sound);
        audio.play();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div className="container">
      <div id="drum-machine">
        <div id="display">{display}</div>
        <div id="drum-pads">
          <Pad setDisplay={setDisplay} padName="Work it" sound={workIt} />
          <Pad setDisplay={setDisplay} padName="Make it" sound={makeIt} />
          <Pad setDisplay={setDisplay} padName="Do it" sound={doIt} />
          <Pad setDisplay={setDisplay} padName="Makes us" sound={makesUs} />
          <Pad setDisplay={setDisplay} padName="Harder" sound={harder} />
          <Pad setDisplay={setDisplay} padName="Better" sound={better} />
          <Pad setDisplay={setDisplay} padName="Faster" sound={faster} />
          <Pad setDisplay={setDisplay} padName="Stronger" sound={stronger} />
          <Pad setDisplay={setDisplay} padName="More than" sound={moreThan} />
          <Pad setDisplay={setDisplay} padName="Ever" sound={ever} />
          <Pad setDisplay={setDisplay} padName="Work is" sound={workIs} />
          <Pad setDisplay={setDisplay} padName="Over" sound={over} />
        </div>
      </div>
    </div>
  );
}

export default App;
