import { useReducer } from "react";

function ReducerCounter() {
  const [counter, dispatch] = useReducer(reducer, 0);

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };

  function reducer (state, action) {
    if (action.type == "increment") return (state = state + 1);
    else if (action.type == "decrement") return (state = state - 1);
    else return state;
  };
 
  return (
    <>
      <h2>Counter: {counter}</h2>
      <button onClick={handleIncrement}>Increment</button>{" "}
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
}

export default ReducerCounter;
