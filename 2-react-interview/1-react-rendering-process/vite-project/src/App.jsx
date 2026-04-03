import { useState } from "react";

function App() {
  return (
    <>
      <CounterParent />
    </>
  );
}

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  console.log(`count rendered`);
  return (
    <div>
      <h3>The current count is {count}</h3>
      <button onClick={handleIncrement}>Increment By 2</button>
    </div>
  );
};

const CounterParent = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [showMessage2, setShowMessage2] = useState(false);
  const [frameWorks, setFrameWorks] = useState([
    { id: 0, name: "react" },
    { id: 1, name: "angular" },
  ]);

  console.log("parent rendered");

  const toggleMessages = () => {
    setShowMessage(!showMessage);
    setShowMessage2(!showMessage2);
  };

  const handleFrameWorks = () => {
    setFrameWorks([...frameWorks, { id: 2, name: "vue js" }]);
  };

  console.log(frameWorks);

  return (
    <div>
      <h1>Counter Example</h1>
      <Counter />
      <br />
      {showMessage && <b>Now you see me</b>}
      <br />
      {showMessage2 && <b>Now you see me again</b>}
      <button onClick={toggleMessages}>Show Message</button>
      <div className="frameworks">
        {frameWorks.map((item) => (
          <p key={item.id}>{item.name}</p>
        ))}
      </div>
      <button onClick={handleFrameWorks}>Add new Framework</button>
    </div>
  );
};

export default App;
