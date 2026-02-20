/* LAB EXERCISE 3: (page 45)

[/] Modify the Emoji component from Module 6 Exercise 3 and create a context for storing the current emoji/mood (pages 36 to 44)
[/] Display the current emoji from the BitcoinRates component, and make sure it updates when clicking the ‘Change Mood’ button. */

//STEP 1. Create context.
import { createContext, useState } from "react";

export const EmojiContext = createContext();

export function EmojiProvider({children}) {
  // two variables :
  // mood stores current mood, default happy
  // setMood is a function for updating mood
  const moodEmoji = [
    { id: 1, name: "happy", emoji: "😊" },
    { id: 2, name: "sad", emoji: "😢"}
  ];

  // initially sets the mood to happy
  const [mood, setMood] = useState("happy");

  // Helper: get the current emoji object based on mood name
  const currentMood = moodEmoji.find((m) => m.name === mood);

  // Swap between two emojis when clicked (happy / sad)
  const swapBetweenMoods = () => {
    setMood((prev) => (prev === "happy" ? "sad" : "happy"));
  };

  return (
    <>
    {/* STEP 2. Provide the context. */}
      <EmojiContext.Provider value={{mood, currentMood, swapBetweenMoods}}>
        {children} </EmojiContext.Provider>
        </> )

    {/* STEP 3. Use the context. Refer to the BitCoinRates.jsx */}
};