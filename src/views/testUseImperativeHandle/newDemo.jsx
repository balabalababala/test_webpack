import React, { useImperativeHandle, useRef } from "react";
import Home from "../component/home";

const FancyInput = React.forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));

  return <input ref={inputRef} type="text" />;
});

const App = (props) => {
  const fancyInputRef = useRef();

  return (
    <div>
      <FancyInput ref={fancyInputRef} />
      <button onClick={() => fancyInputRef.current.focus()}>
        父组件调用子组件的 focus
      </button>
    </div>
  );
};

export default function () {
  return (
    <div>
      <h1>new Demo</h1>
      <App />
    </div>
  );
}
