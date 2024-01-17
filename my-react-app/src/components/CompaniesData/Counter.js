import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.secondState.count);
  const dispatch = useDispatch();

  const handleIncrement = (value) => {
    dispatch({ type: "INCREMENT", payload: value });
  };

  const handleDecrement = (value) => {
    dispatch({ type: "DECREMENT", payload: value });
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => handleIncrement(5)}>Increment by 5</button>
      <button onClick={() => handleDecrement(2)}>Decrement by 2</button>
    </div>
  );
};

export default Counter;
