import { useState } from "react";

// save in MoodChanger.jsx
function MoodChanger() {
  // two variables :
  // mood stores current mood, default happy
  // setMood is a function for updating mood
  const [mood, setMood] = useState("happy");

// Calls setMood with a fixed value of 'ecstatic'
// begin with 'handle' prefix by convention
const handleWinLotto = () => {
setMood('ecstatic')
console.log(mood); // synchronous update; setMood is async
}
// Calls setMood with a conditional state value
const handleRunningLate = () => {
let newMood = 'stressed';
if (mood === 'stressed') newMood = 'really stressed'
else if (mood === 'really stressed') newMood = 'giving up';
setMood(newMood)
}

  {/*function changeMood() {
    if (mood == "happy") {
      setMood("sad");
    } else if (mood == "sad") {
      setMood("happy");
    }
  }*/}

  return (
    <>
      <div className="MoodChanger componentBox">Current Mood: {mood}</div>
      {/*<button onClick={changeMood}>Change Mood</button>*/}
      {/* Using arrow functions */}
<div><button onClick={() => setMood('tired')}>Stay Up
Late</button>
{/* Using custom event handler functions */}
<button onClick={handleRunningLate}>Running Late</button>
<button onClick={handleWinLotto}>Win Lotto</button>
</div>
    </>
  );
}

export default MoodChanger;
