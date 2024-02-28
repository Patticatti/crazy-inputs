import React, { useState, useEffect } from "react";
function Timer({ setShowRickroll }) {
  const [time, setTime] = useState(20 * 1000); // Initial time in milliseconds (10 seconds)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 10); // Decrease time by 10 milliseconds
    }, 10);

    // Clear interval when component unmounts or when time reaches 0
    return () => clearInterval(timer);
  }, []); // Empty dependency array ensures the effect runs only once upon component mount

  useEffect(() => {
    if (time === 0) {
      setShowRickroll(true);
    }
  }, [time]);
  // Convert time to seconds and milliseconds
  const seconds = Math.floor((time / 1000) % 60);
  const milliseconds = Math.floor((time % 1000) / 10);

  return (
    <div>
      <p>
        Time Remaining: {seconds < 10 ? `0${seconds}` : seconds}:
        {milliseconds < 10 ? `0${milliseconds}` : milliseconds}s
      </p>
    </div>
  );
}

export default Timer;
