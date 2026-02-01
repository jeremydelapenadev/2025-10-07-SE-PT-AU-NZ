import { useState } from "react";
import Clock from "./Clock";

function ClockDisplay() {
  const [showClock, setShowClock] = useState(false);

  function ToggleClock() {
    setShowClock(!showClock);
  }

  return (
    <>
      {showClock && <Clock />}
      <button onClick={ToggleClock}>Toggle Show Clock</button>
    </>
  );
}

export default ClockDisplay;