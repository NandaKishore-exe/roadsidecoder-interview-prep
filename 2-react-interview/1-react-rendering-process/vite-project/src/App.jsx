import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  console.log(`rendered`);

  return (
    <>
      <h1>Counter Example</h1>
      <h3>The current count is {count}</h3>
      <button onClick={handleIncrement}>Increment</button>
    </>
  );
}

export default App;
