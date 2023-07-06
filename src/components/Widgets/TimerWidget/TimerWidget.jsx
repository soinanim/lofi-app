import React, { useState } from "react";
import { useTimer } from "react-timer-hook";
import Draggable from "react-draggable";
import "./TimerWidget.scss";

function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  const time = new Date();
  const [newTime, setNewTime] = useState(300);
  return (
    <Draggable>
      <div style={{ textAlign: "center" }} className="timer">
        <div style={{ fontSize: "80px" }}>
          <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
          <span>{seconds}</span>
        </div>
        <h2>{isRunning ? "Running" : "Not running"}</h2>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={resume}>Resume</button>
        <button
          onClick={() => {
            // Restarts to 5 minutes timer

            time.setSeconds(time.getSeconds() + 300);
            restart(time);
          }}
        >
          Restart
        </button>
        <button
          onClick={() => {
            // Restarts to 5 minutes timer
            const time = new Date();
            setNewTime(newTime + 300);
            time.setSeconds(time.getSeconds() + newTime);
            restart(time);
          }}
        >
          Add 5 min
        </button>
      </div>
    </Draggable>
  );
}

export default function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 300);
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}
