import { useState } from "react";
import { useEffect } from "react";

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => tick(), 1000);
    console.log("Clock component mounted");

    // cleanup function
    return () => clearInterval(intervalId);
  }, []); // runs once on mount

  const tick = () => {
    setDate(new Date());
    console.log("tick");
  };

  return (
    <div className="Clock">
      <h3>Digital Clock</h3>
      {date.toLocaleTimeString()}
    </div>
  );
}

export default Clock;

/* function Clock() {
    const [date, setDate] = useState(new Date())

useEffect(() => {
    setInterval(() => tick(), 1000);
    console.log("Clock component mounted");
},
})

    return (
        <>
        
        <h3>Digital Clock</h3>
        {date.toLocaleTimeString()}
        </>
    )
}

export default Clock*/
