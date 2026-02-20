/* LAB EXERCISE 3: (page 58)

[ ] Create an Emoji component, in its own file, which initially renders a happy emoji.
[ ] Add a ‘Change Mood’ button in the component to switch between 2 emojis when clicked. */

import { useState } from "react";

function Emoji() {
  // two variables :
  // mood stores current mood, default happy
  // setMood is a function for updating mood
  const moodEmoji = [
    { id: 1, name: "happy", emoji: "😊" },
    { id: 2, name: "tired", emoji: "🥱" },
    { id: 3, name: "stressed", emoji: "😰" },
    { id: 4, name: "really stressed", emoji: "😫" },
    { id: 5, name: "giving up", emoji: "😵‍💫" },
    { id: 6, name: "ecstatic", emoji: "🤩" },
    { id: 7, name: "sad", emoji: "😢"}
  ];

  // initially sets the mood to happy
  const [mood, setMood] = useState("happy");

  // Helper: get the current emoji object based on mood name
  const currentMood = moodEmoji.find((m) => m.name === mood);

  // Lab requirement - Swap between two emojis when clicked (happy / sad)
  const swapBetweenMoods = () => {
    if (mood === "happy") setMood("sad");
    else if (mood === "sad") setMood("happy");
    else setMood("happy")
  };

  // Random mood function
  const handleChangeMoodRandomly = () => {
    const randomIndex = Math.floor(Math.random() * moodEmoji.length);
    setMood(moodEmoji[randomIndex].name);
  };

  return (
    <>
      <div className="Emoji componentBox">
        {/* Display emoji + mood name */}
        Current Mood: {currentMood?.emoji}
        {currentMood?.name}
      </div>
      <div>
        {/* Lab Requirement: Swap between two emojis when clicked */}
        <button onClick={swapBetweenMoods}> Change Mood </button>
      </div>
      <div style={{ marginTop: "10px" }}>
        {/*Random Mood button */}
        <button onClick={handleChangeMoodRandomly}>Randomise Mood</button>
      </div>
    </>
  );
}

export default Emoji;
