import React, { useEffect } from "react";
import { useState } from "react";

const Timer = ({showTimer}) => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("heyyyy");
      if (count === 0) {
          alert('test over');
        clearInterval(timer);
        showTimer(false);
      } else {
        setCount((count -= 1));
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div>Seconds: {count}</div>;
};

export default Timer;
