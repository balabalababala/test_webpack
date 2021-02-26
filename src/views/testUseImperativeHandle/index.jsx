import React, { useCallback, useRef } from "react";
import Home from "../component/home";
import OldDemo from "./oldDemo.jsx";
import NewDemo from "./newDemo.jsx";
import NewDemo2 from "./newDemo2.jsx";

export default function () {
  return (
    <div>
      <Home />
      <OldDemo />
      <NewDemo />
      <NewDemo2 />
    </div>
  );
}
