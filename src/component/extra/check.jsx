import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  // Define initial time in seconds
  const [time, setTime] = useState({
    hours: 5,
    minutes: 22,
    seconds: 55
  });
  const [isTimeUp, setIsTimeUp] = useState(false);

  // Function to decrease time
  const tick = () => {
    const { hours, minutes, seconds } = time;

    if (hours === 0 && minutes === 0 && seconds === 0) {
      setIsTimeUp(true);
    } else if (seconds > 0) {
      setTime({ hours, minutes, seconds: seconds - 1 });
    } else if (minutes > 0) {
      setTime({ hours, minutes: minutes - 1, seconds: 59 });
    } else if (hours > 0) {
      setTime({ hours: hours - 1, minutes: 59, seconds: 59 });
    }
  };

  // useEffect to start the countdown
  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);

    return () => clearInterval(timerId); // Clean up the interval on component unmount
  }, [time]);

  return (
    <div>
      {isTimeUp ? (
        <h1>Time's up!</h1>
      ) : (
        <h1>
          {`${time.hours.toString().padStart(2, '0')} : 
            ${time.minutes.toString().padStart(2, '0')} : 
            ${time.seconds.toString().padStart(2, '0')}`}
        </h1>
      )}
    </div>
  );
};

export default CountdownTimer;
