import { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [count, setCount] = useState(0);
  const ref = useRef(0);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h3>
        <u>useRef Hook</u>
      </h3>
      <h5>Question 1: what is useRef in React?</h5>
      {/* - useRef is a hook used to create a mutable reference that persists across renders. 
          - It returns a mutable object with a .current property.
      */}
      <p>Ref value - {ref.current}</p>
      <button
        onClick={() => {
          ref.current += 1;
        }}
      >
        Increment Ref
      </button>
      <p>State value - {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment State
      </button>
      <h5>Question 2: When would you use useRef?</h5>
      {/* 
      - Accessing DOM elements or managing focus.
      - Storing mutable values that persist without causing re-renders.
      - Caching values to avoid re-intialization on re-renders.
       */}
      {/* <button
        onClick={() => {
          inputRef.current.focus();
          inputRef.current.value = "nanda";
        }}
      >
        Set Focus
      </button> */}
      <h5>Question 3: How do you access a DOM element using useRef?</h5>
      <input type="text" ref={inputRef} />
      <h5>Question 4: Difference between useState and useRef?</h5>
      {/* - useState
      Manges state and triggers re-renders when its value changes. When you
      update it using setStateValue, the component re-renders, and the updated
      value is reflected in the UI.

      -useRef
      Holds a mutable value (current) that persists across renders without causing re-renders
      When you update it (refValue.currenr = ...), the component doesn't cause re-render,
      but the updated value is stored and accessible across renders. */}
    </div>
  );
};

export default UseRef;
