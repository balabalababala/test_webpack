import React, { useCallback, useRef } from "react";
import Home from "../component/home";

// 实现 ref 的转发
const FancyButton = React.forwardRef((props, ref) => (
  <div>
    <input ref={ref} type="text" />
    <button>{props.children}</button>
  </div>
));

// 父组件中使用子组件的 ref
function App() {
  const ref = useRef();
  const handleClick = useCallback(() => ref.current.focus(), [ref]);

  return (
    <div>
      <FancyButton ref={ref}>Click Me</FancyButton>
      <button onClick={handleClick}>获取焦点</button>
    </div>
  );
}

export default function () {
  return (
    <div>
      <h1>new Demo</h1>
      <App />
    </div>
  );
}
