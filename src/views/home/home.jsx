import ReactDOM from "react-dom";

import {
  HashRouter as Router,
  Link,
  Route,
  BrowserRouter,
} from "react-router-dom";

import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ul className="menu">
        <li>
          <Link to="/testUseRef">TestUseRef</Link>
        </li>
        <li>
          <Link to="/testUseState">testUseState</Link>
        </li>
        <li>
          <Link to="/testUseCallback">testUseCallback</Link>
        </li>
        <li>
          <Link to="/testUseEffect">testUseEffect</Link>
        </li>
        <li>
          <Link to="/testUseContext">testUseContext</Link>
        </li>
        <li>
          <Link to="/testUseReducer">testUseReducer</Link>
        </li>
        <li>
          <Link to="/testUseImperativeHandle">testUseImperativeHandle</Link>
        </li>
        <li>
          <Link to="/testUseMemo">testUseMemo</Link>
        </li>
        <li>
          <Link to="/testUseLayoutEffect">testUseLayoutEffect</Link>
        </li>
        <li>
          <Link to="/withoutHook">withoutHook</Link>
        </li>
        <li>
          <Link to="/testSlotSimilar">testSlotSimilar</Link>
        </li>
        <li>
          <Link to="/tabBar">tabBar</Link>
        </li>
        <li>
          <Link to="/temp">temp</Link>
        </li>
      </ul>
    </div>
  );
}
export default App;
