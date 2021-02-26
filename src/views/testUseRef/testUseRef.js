import React, { useState, useEffect, useMemo, useRef } from "react";
const set = new Set();
const arr = [];
window.mySet = set;
window.myArr = arr;

export default function App(props) {
  const [count, setCount] = useState(0);

  const doubleCount = useMemo(() => {
    return 2 * count;
  }, [count]);

  const counterRef = useRef();
  const myConst = useRef({ a: Math.random(), b: function () {} }); // 可以用来保存常量

  console.log('counterRef:', counterRef)

  useEffect(() => {
    document.title = `The value is ${count}`;
    console.log(counterRef.current);
    console.log(myConst);
    myConst.current.a += 1;
  }, [count]);

  return (
    <>
      <button
        ref={counterRef}
        onClick={() => {
          set.add(myConst);
          arr.push(myConst);
          setCount(count + 1);
        }}
      >
        Count: {count}, double: {doubleCount}
      </button>
    </>
  );
}
