import "./App.css";
import React, { useState, useEffect } from "react";

let time = undefined;
function App() {
  let [count, setCount] = useState(0);
  let [stop, setStop] = useState(false);
  let [stops, setStops] = useState(false);

  function onStart() {
    time = setInterval(() => {
      setCount((x) => x + 1);
    }, 1000);
    setStop(true);
    setStops(false);
  }
  function onStop() {
    clearInterval(time);
    setStop(false);
    setStops(true);
  }
  function onReset() {
    setCount(0);
    clearInterval(time);
  }
  return (
    <div className="App">
      <h1> STOP-WATCH </h1>
      <h2>{count}</h2>
      <button onClick={onStart} disabled={stop}>
        START
      </button>
      <button onClick={onStop} disabled={stops}>
        STOP
      </button>
      <button onClick={onReset}>RESET</button>
    </div>
  );
}

export default App;
