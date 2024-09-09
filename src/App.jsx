import { useEffect, useState } from "react";
import { ABT } from "bahtrext";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "./App.css";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function App() {
  const [triggerState, setTriggerState] = useState(false);
  const [triggerState2, setTriggerState2] = useState(false);
  const [number, setNumber] = useState(``);
  const [numberText, setNumberText] = useState(``);
  useEffect(() => {
    setNumberText(() => ABT(number));
  }, [number]);
  useEffect(() => {
    if (!triggerState2) {
      setNumber(() => `${getRandomInt(999999999999)}`);
    }
  }, [triggerState2]);
  return (
    <>
      <div className="" style={{ paddingTop: `40vh` }}>
        <ScrollTrigger
          onEnter={() => setTriggerState(true)}
          onExit={() => setTriggerState(false)}
        >
          <h2>
            {triggerState && <CountUp end={number} />}
          </h2>
        </ScrollTrigger>
      </div>
      <div className="" style={{ paddingTop: `100vh`, paddingBottom: `50vh` }}>
        <ScrollTrigger
          onEnter={() => setTriggerState2(true)}
          onExit={() => setTriggerState2(false)}
        >
          {triggerState2 && <h2>{numberText}</h2>}
        </ScrollTrigger>
      </div>
    </>
  );
}

export default App;
