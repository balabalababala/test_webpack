import React, { useState, useEffect } from "react";
import Home from "../component/home";

function Example() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const [random, setRandom] = useState('');

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  }, [count]);

  useEffect(() => {
    console.log(11111 + ':' + count + ':' + count1)
    const timer = setInterval(() => {
      console.log(22222 + ':' + count + ':' + count1) // 这里始终是 0 0
      setRandom(new Date().toString())
    }, 2000);
    return function () {
      console.log(33333 + ':' + count + ':' + count1) // 这里始终是 0 0
      clearInterval(timer)
    }
  }, [count])



  useEffect(() => {
    console.log('a' + ':' + count + ':' + count1)
    const timer = setInterval(() => {
      console.log('b' + ':' + count + ':' + count1) // 这里始终是 0 0
      setRandom(new Date().toString())
    }, 2000);
    return function () {
      console.log('c' + ':' + count + ':' + count1) // 这里始终是 0 0
      clearInterval(timer)
    }
  })



  const [count3, setCount3] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count3} times`;
  });

  return (
    <div>
      <Home />
      <div>random: {random}</div>
      <p>You clicked {count} times</p>
      <p>You clicked {count1} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setCount1(count1 + 1)}>Click me</button>

      <div>
        <p>You clicked {count3} times</p>
        <button onClick={() => setCount3(count3 + 1)}>
          Click me
      </button>
      </div>
    </div>
  );
}

export default Example;
