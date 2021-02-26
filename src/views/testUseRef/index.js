import React, { useState } from "react";
import View from "./testUseRef";
import Home from "../component/home";

export default function App(props) {
  const [show, setShow] = useState(false);
  return (
    <>
      <Home />
      {show && (
        <div>
          show
          <View />
        </div>
      )}
      {!show && (
        <div>
          hide
          <View />
        </div>
      )}
      <input
        type="button"
        onClick={() => {
          setShow(!show);
        }}
        value="change"
      />
      <div>
        组件的生命周期内，ref都是相同的
        <br />
        多次引用同一个组件，每个引用的ref都是独立的
        <br />
        上面的显示和隐藏，ref会变化，因为组件重新被mounted了
      </div>
    </>
  );
}
