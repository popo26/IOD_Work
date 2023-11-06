// import { React } from "react"; //another way to use useState hook - doesn't work
import { useState } from "react";

function Bomb() {
  throw new Error("💥 KABOOM 💥");
}

function ExplodingBomb() {
  //   const [exploded, setExploded] = React.useState(false);
  const [exploded, setExploded] = useState(false);

  return (
    <div className="ExplodingBomb componentBox">
      <button onClick={() => setExploded(!exploded)}>
        DANGER: Click to explode bomb!
      </button>
      {/* Renders the Bomb conditionally, depending on state */}
      {exploded ? <Bomb /> : null}
    </div>
  );
}

export default ExplodingBomb;
