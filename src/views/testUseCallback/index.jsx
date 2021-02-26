import React, { useState, useCallback, useEffect } from "react";
import Home from "../component/home";

window.arr = [];
window.arr2 = [];

export default function () {
  let [num, setNum] = useState(0);

  const callback = useCallback(() => {
    console.log("callback [num]", num);
  }, [num]);

  callback();

  const callback1 = useCallback(() => {
    console.log("callback1 []:", num);
    return "from callback1";
  }, []);

  callback1();

  window.arr2.push(callback1);

  const callback3 = () => {
    console.log("callback3 []:", num);
    return "from callback3";
  };

  window.arr.push(callback3);
  useEffect(() => {
    console.log(33333);
  }, []);

  const callback4 = useCallback(
    ((r) => {
      return () => {
        console.log("callback4 []:", r, num);
      };
    })(Math.random()),
    []
  );

  const callback5 = useCallback(
    ((r) => {
      return () => {
        console.log("callback5 []:", r, num);
      };
    })(Math.random()),
    [num]
  );

  const callback6 = useCallback(() => {
    console.log("callback6 []:", num);
    setNum(Math.random());
    return "from callback6";
  }, []);
  return (
    <div>
      <Home />

      <div>
        <h1>{num}</h1>
        <button
          onClick={() => {
            setNum(++num);
          }}
        >
          num++
        </button>
      </div>

      <div>
        <button onClick={callback}>callback</button>
      </div>

      <div>
        <button onClick={callback1}>callback1</button>
      </div>

      <div>
        <button onClick={() => console.log(callback1())}>callback11</button>
      </div>
      <div>
        <button onClick={() => console.log(callback3())}>callback3</button>
      </div>
      <div>
        <button onClick={() => console.log(callback4())}>callback4</button>
      </div>
      <div>
        <button onClick={() => console.log(callback5())}>callback5</button>
      </div>
      <div>
        <button onClick={() => console.log(callback6())}>callback6</button>
      </div>
    </div>
  );
}
