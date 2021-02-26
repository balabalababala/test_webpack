import React, { useState, useMemo, useEffect } from "react";
import Home from "../component/home";

function Button({ name, children }) {
  function changeName(name) {
    console.log("11");
    return name + "改变name的方法11";
  }

  const otherName = changeName(name);

  return (
    <>
      <div>{otherName}</div>
      <div>{children}</div>
    </>
  );
}

function Button2({ name, children }) {
  function changeName(name) {
    console.log("22");
    return name + "改变name的方法22";
  }
  // 加入这个，只有name变，组件才会刷新
  const otherName = useMemo(() => changeName(name), [name]);
  return (
    <>
      <div>{otherName}</div>
      <div>{children}</div>
    </>
  );
}

// 使用useEffect + useState 实现 与 button2 等价的效果
function Button3({ name, children }) {
  const [otherName, setOtherName] = useState(name);

  useEffect(() => {
    console.log("33");
    setOtherName(name + "改变name的方法33");
  }, [name]);

  return (
    <>
      <div>{otherName}</div>
      <div>{children}</div>
    </>
  );
}

function App() {
  const [name, setName] = useState("名称");
  const [content, setContent] = useState("内容");
  const [name333, setName333] = useState(name);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log(name);
    }, 1000);
    setName333(name + Math.random());
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <button onClick={() => setName(new Date().getTime())}>name</button>
      <button onClick={() => setContent(new Date().getTime())}>content</button>
      <Button name={name}>{content}</Button>
      <Button2 name={name}>{content}</Button2>
      <Button3 name={name}>{content}</Button3>
      <div>{name333}</div>
    </>
  );
}

export default App;
