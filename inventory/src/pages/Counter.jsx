import { useAppState } from "../context/AppState";
import React from "react";

const Counter = () => {
  const [state, dispatch] = useAppState();
  const handleCountIncrement = (dispatch) => {
    dispatch({ type: "INCREMENT" });
  };

  const handleCountDecrement = (dispatch) => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <>
      <p>Counter: {state.counter}</p>
      <div className="counter">
        <button onClick={() => handleCountIncrement(dispatch)}>+</button>
        <button onClick={() => handleCountDecrement(dispatch)}>-</button>
      </div>
    </>
  );
};

export default Counter;


