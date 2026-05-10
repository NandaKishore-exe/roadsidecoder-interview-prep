import { useEffect, useLayoutEffect, useState } from "react";

const UseEffect = () => {
  const [user, setUser] = useState({});
  const [seconds, setSeconds] = useState(0);

  // useEffect(
  //   () => {
  // side effect code goes here

  //     return () => {
  // cleanup code (optional)
  // runs on component unmount or before re-runs
  //     };
  //   },
  //   [
  // dependencies
  //   ],
  // );

  const fetchUser = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("interval cleared");
    };
  }, []);

  useEffect(() => {
    console.log("useEffect here");
  }, []);

  useLayoutEffect(() => {
    console.log("useLayoutEffect here");
  }, []);

  return (
    <div>
      <h3>
        <u>useEffect Hook</u>
      </h3>
      <h5>Question 1: What is useEffect in react?</h5>
      {/* -useEffect is a hook used in functional components to perform side effects after
      rendering, such as data fetching, subscriptions, or manual DOM manipulation. */}

      <h5>Question 2: Why is dependency array used in useEffect?</h5>
      {/* 
      -when it is empty, it runs only once.
      -When these values inside it change, the effect is re-run.
      -If removed, the effect runs after every render.

      -Handling dependencies ensures that the effect runs only when necessary and prevents unneccessary re-execution of the effect,
      optimizing performance and avoiding potential bugs.
       */}

      <h5>Question 3: Example of useEffect for data fetching</h5>
      {/* {user.map((user) => (
        <p>{user.name}</p>
      ))} */}

      <h5>
        Question 4: Convert major lifecycle methods to useEffect and Explain.
      </h5>
      {/* Explained in previous lessons*/}

      <h5>
        Question 5: How to perform cleanup in useEffect? Explain with example.
      </h5>
      {/* 
      - You can return a cleanup function inside useEffect, which runs before the effect re-runs or when the component unmounts.
      - This is useful for cleaning up subscriptions or event listeners.   
      */}
      <p>Seconds : {seconds}</p>
      <h5>
        Question 6: Explain useLayoutEffect and how it is different from
        useEffect?
      </h5>
      {/* useEffect: 
        - Asynchronous: Runs after the render cycle is commited to the screen.
        - Good for Performance: Does not block the browser from painting changes on the screen.


      useLayoutEffect:
        - Synchronous: Runs synchronously immediately after the DOM is updated but before the browser paints anything on the screen.
        - Potentially Blocking: Can potentially cause delays in the rendering process if the operations are heavy. */}
    </div>
  );
};

export default UseEffect;
