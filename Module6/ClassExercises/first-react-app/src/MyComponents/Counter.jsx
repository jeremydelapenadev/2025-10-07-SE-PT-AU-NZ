import { useRef, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
// useState hook to create a count state variable initialized to 0

const counterRef = useRef(0); // non-state variable --> use the useRef hook

// alert(counterRef.current);

  return (
    <>
      <div> Counter: {count}</div>
      <button
        onClick={() => {
          {/* counterRef.current = counterRef.current + 1; */}
          setCount(count + 1);
        }}
      >Counter</button>
    </>
  );
}

export default Counter;
