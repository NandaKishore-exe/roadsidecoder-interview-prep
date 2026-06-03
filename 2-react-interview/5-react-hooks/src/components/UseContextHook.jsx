import { createContext, useContext } from "react";

const dataContext = createContext();
const UseContextHook = () => {
  return (
    <dataContext.Provider value="sample">
      <div>
        <h3>
          <u>useContext Hook</u>
        </h3>

        <h5>Question 1: What is useContext in React?</h5>
        {/*
        - Used to consume values (like data or functions) from a context created by `createContext()`
        - It allows functional components to access context values without prop drilling.
        - In scenarios where passing props through multiple levels of components is impractical.
      */}

        <ChildComponentOne />
        <ChildComponentTwo />
        <h5>Question 2: Create an app to change theme in React JS?</h5>
        {/* Discussed in next lesson*/}

        <h5>
          Question 3: Can you have multiple contexts in a single component?
          {/* Yes we can use multiple contexts */}
        </h5>
      </div>
    </dataContext.Provider>
  );
};

export const ChildComponentOne = () => {
  const displayData = useContext(dataContext);
  return (
    <div>
      <h2>Child Component One</h2>
      <p>{displayData}</p>
    </div>
  );
};

export const ChildComponentTwo = () => {
  return (
    <div>
      <h2>Child Component Two</h2>
    </div>
  );
};

export default UseContextHook;
