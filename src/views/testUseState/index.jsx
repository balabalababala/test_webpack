import React, { useState } from "react";
import Home from "../component/home";

const useRandomColor = (initColor) => {
  console.log("initColor", initColor);
  const [color, setColor] = useState(initColor);
  const handleRandom = () => {
    //随机颜色
    const randomColor = "#" + Math.random().toString(16).slice(2, 8);
    // setColor(randomColor);
    setColor(prevColor => "#" + Math.random().toString(16).slice(2, 8))
  };
  console.log("color", color);
  return [color, handleRandom];
};

function Com1() {
  const [color, handleRandom] = useRandomColor("red");
  const [color2, handleRandom2] = useRandomColor("red");
  return (
    <div>
      <div style={{ backgroundColor: color, padding: 50, textAlign: "center" }}>
        <button onClick={handleRandom}>点击换色</button>
      </div>
      <div
        style={{ backgroundColor: color2, padding: 50, textAlign: "center" }}
      >
        <button onClick={handleRandom2}>点击换色</button>
      </div>
    </div>
  );
}

function Com2() {
  const [color, handleRandom] = useRandomColor("red");
  const handleClick = () => {
    setInterval(handleRandom, 1000);
  };
  return (
    <div style={{ backgroundColor: color, padding: 50, textAlign: "center" }}>
      <button onClick={handleClick}>点击换色</button>
    </div>
  );
}

export default function () {
  return (
    <div>
      <Home />
      <Com1 />
      <Com2 />
      <div>
        钩子是重用有状态逻辑的一种方式，而不是状态本身。
        事实上，每次调用Hook都有一个完全隔离的状态 -
        所以你甚至可以在一个组件中使用相同的自定义Hook两次。 custom
        hook更像是一种约定而非功能。如果函数的名称以use开头并且它调用其他Hook，我们说它是一个Custom
        Hook。useSomething命名约定是linter插件如何使用Hooks在代码中查找错误的。
      </div>
    </div>
  );
}
