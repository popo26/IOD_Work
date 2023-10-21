import { useState } from "react";

function MoodChanger() {
  const [mood, setMood] = useState("happy");
  // Calls setMood with a fixed value of 'ecstatic'
  // begin with 'handle' prefix by convention
  const handleWinLotto = () => {
    setMood("ecstatic");
    console.log("Value of moode = ", mood); //This is to show you dont see 'ecstatic' because setMood is asynchronous. It shows previous value.
  };
  // Calls setMood with a conditional state value
  const handleRunningLate = () => {
    let newMood = "stressed";
    if (mood === "stressed") newMood = "really stressed";
    else if (mood === "really stressed") newMood = "giving up";
    else if (mood === "giving up") newMood = "Let's go for walk";
    setMood(newMood);
  };
  return (
    <div className="MoodChanger componentBox">
      Current Mood: {mood}
      {/* Using arrow functions */}
      <button onClick={() => setMood("tired")}>Stay Up Late</button>
      {/* Using custom event handler functions */}
      <button onClick={handleRunningLate}>Running Late</button>
      <button onClick={handleWinLotto}>Win Lotto</button>
    </div>
  );
}
// ++ add your own buttons to handle different moods!

export default MoodChanger;
