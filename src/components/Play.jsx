import { useState } from "react";

function Play({ children, onPlay, onPause }) {
  // console.log("render PlayButton");

  let [status, setStatus] = useState(false);
  function handleClick() {
    status ? onPause() : onPlay();
    setStatus(!status);
  }
  return (
    <button className="btn" onClick={handleClick}>
      {children}
      {status ? "⏸️" : "▶️"}
    </button>
  );
}

export default Play;
