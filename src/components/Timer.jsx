import { useEffect, useState } from "react";

const Timer = ({ submit, seconds, setSeconds, minutes, setMinutes }) => {
  var timer;
  useEffect(() => {
    timer = setInterval(() => {
      if (minutes === 0 && seconds === 0) {
        submit();
      } else {
        setSeconds(seconds - 1);

        if (seconds === 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <div>
      <div>
        <div>
          <h1>Timer</h1>
          <h1>
            {minutes < 10 ? "0" + minutes : minutes} :{" "}
            {seconds < 10 ? "0" + seconds : seconds}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Timer;
