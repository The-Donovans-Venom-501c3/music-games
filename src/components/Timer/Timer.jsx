import { useState, useEffect } from "react";

import "./Timer.scss"

export default function Timer() {
  const [isStarted, setIsStarted] = useState(true);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (isStarted) {
      const intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }else {
        setIsStarted(false);
    }
  }, [isStarted]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      remainingSeconds < 10 ? "0" : ""
    }${remainingSeconds}`;
  };
  return (
    <div className="timer">
      <span>{isStarted ? formatTime(seconds) : "00:00"}</span>
    </div>
  );
}
