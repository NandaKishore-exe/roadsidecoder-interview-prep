import { useState } from "react";
import useCustomEffect from "./useCustomEffect";

const Counter = () => {
  const [count, setCount] = useState(0);

  useCustomEffect(() => {
    console.log("effect runs");

    return () => {
      console.log("cleanup");
    };
  }, [count]);

  return (
    <div>
      <h2>Counter : {count}</h2>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        Increment
      </button>
      <button type="button" onClick={() => setCount((prev) => prev - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
