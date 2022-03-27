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
  }, [display]);
  return (
    <div className="container">
      <div id="drum-machine">
        <div id="display">{display}</div>
        <div id="drum-pads">
          <Pad setDisplay={setDisplay} keyPressed={keyPressed} id="Work it" keyCode="81" sound={sound1} />
          <Pad setDisplay={setDisplay} keyPressed={keyPressed} id="Make it" keyCode="87" sound={sound2} />
          <Pad setDisplay={setDisplay} keyPressed={keyPressed} id="Do it" keyCode="69" sound={sound3} />
          <Pad setDisplay={setDisplay} keyPressed={keyPressed} id="Makes us" keyCode="65" sound={sound4} />
          <Pad setDisplay={setDisplay} keyPressed={keyPressed} id="Harder" keyCode="83" sound={sound5} />
          <Pad setDisplay={setDisplay} keyPressed={keyPressed} id="Better" keyCode="68" sound={sound6} />
          <Pad setDisplay={setDisplay} keyPressed={keyPressed} id="Faster" keyCode="90" sound={sound7} />
          <Pad setDisplay={setDisplay} keyPressed={keyPressed} id="Stronger" keyCode="88" sound={sound7} />
          <Pad setDisplay={setDisplay} keyPressed={keyPressed} id="More than" keyCode="67" sound={sound7} />
          <Pad setDisplay={setDisplay} keyPressed={keyPressed} id="Faster" keyCode="90" sound={sound7} />
          <Pad setDisplay={setDisplay} keyPressed={keyPressed} id="Stronger" keyCode="88" sound={sound7} />
          <Pad setDisplay={setDisplay} keyPressed={keyPressed} id="More than" keyCode="67" sound={sound7} />
        </div>
      </div>
    </div>
  );
}

export default App;
