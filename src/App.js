import './App.css';

import {useState, useEffect} from "react";

import sound1 from "./assets/sound1.mp3";
import sound2 from "./assets/sound2.mp3";
import sound3 from "./assets/sound3.mp3";
import sound4 from "./assets/sound4.mp3";
import sound5 from "./assets/sound5.mp3";
import sound6 from "./assets/sound6.mp3";
import sound7 from "./assets/sound7.mp3";
import Pad from './components/pad';

function App() {
  const [display, setDisplay] = useState("Play your sound");
  const [keyPressed, setKeyPressed] = useState("");
  useEffect(() => {
    const handleKeyDown = (e) => {
      setKeyPressed(e.keyCode);
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
          <Pad setDisplay={setDisplay} keyPressed={keyPressed} setKeyPressed={setKeyPressed} id="Work it" keyCode="65" sound={sound1} />
          <Pad setDisplay={setDisplay} keyPressed={keyPressed} setKeyPressed={setKeyPressed} id="Make it" keyCode="90" sound={sound2} />
          <Pad setDisplay={setDisplay} keyPressed={keyPressed} setKeyPressed={setKeyPressed} id="Do it" keyCode="69" sound={sound3} />
          <Pad setDisplay={setDisplay} keyPressed={keyPressed} setKeyPressed={setKeyPressed} id="Makes us" keyCode="82" sound={sound4} />
          <Pad setDisplay={setDisplay} keyPressed={keyPressed} setKeyPressed={setKeyPressed} id="Harder" keyCode="81" sound={sound5} />
          <Pad setDisplay={setDisplay} keyPressed={keyPressed} setKeyPressed={setKeyPressed} id="Better" keyCode="83" sound={sound6} />
          <Pad setDisplay={setDisplay} keyPressed={keyPressed} setKeyPressed={setKeyPressed} id="Faster" keyCode="68" sound={sound7} />
          <Pad setDisplay={setDisplay} keyPressed={keyPressed} setKeyPressed={setKeyPressed} id="Stronger" keyCode="70" sound={sound7} />
          <Pad setDisplay={setDisplay} keyPressed={keyPressed} setKeyPressed={setKeyPressed} id="More than" keyCode="87" sound={sound7} />
          <Pad setDisplay={setDisplay} keyPressed={keyPressed} setKeyPressed={setKeyPressed} id="Faster" keyCode="88" sound={sound7} />
          <Pad setDisplay={setDisplay} keyPressed={keyPressed} setKeyPressed={setKeyPressed} id="Stronger" keyCode="67" sound={sound7} />
          <Pad setDisplay={setDisplay} keyPressed={keyPressed} setKeyPressed={setKeyPressed} id="More than" keyCode="86" sound={sound7} />
        </div>
      </div>
    </div>
  );
}

export default App;
