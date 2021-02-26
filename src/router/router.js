import React from "react";
import { HashRouter, Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "../views/home";
import TestUseRef from "../views/testUseRef";
import TestUseState from "../views/testUseState";
import TestUseCallback from "../views/testUseCallback";
import TestUseEffect from "../views/testUseEffect";
import TestUseContext from "../views/testUseContext";
import TestUseReducer from "../views/testUseReducer";
import TestUseMemo from "../views/testUseMemo";
import TestUseImperativeHandle from "../views/testUseImperativeHandle";
import WithoutHook from "../views/withoutHook";
import TestUseLayoutEffect from "../views/testuseLayoutEffect";
import TestSlotSimilar from "../views/testSlotSimilar";
// import Temp from "../views/temp";
import TabBar from "../views/tab";

const BasicRoute = () => (
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" exact component={Home}></Route>
        <Route path="/app" component={Home}></Route>
        <Route path="/testUseRef" component={TestUseRef}></Route>
        <Route path="/testUseState" component={TestUseState}></Route>
        <Route path="/testUseCallback" component={TestUseCallback}></Route>
        <Route path="/testUseEffect" component={TestUseEffect}></Route>
        <Route path="/testUseContext" component={TestUseContext}></Route>
        <Route path="/testUseMemo" component={TestUseMemo}></Route>
        <Route path="/testUseReducer" component={TestUseReducer}></Route>
        <Route path="/withoutHook" component={WithoutHook}></Route>
        <Route
          path="/testUseLayoutEffect"
          component={TestUseLayoutEffect}
        ></Route>
        <Route
          path="/testUseImperativeHandle"
          component={TestUseImperativeHandle}
        ></Route>
        <Route path="/testSlotSimilar" component={TestSlotSimilar}></Route>
        <Route path="/tabBar" component={TabBar}></Route>
        {/* <Route path="/temp" component={Temp}></Route> */}
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);

export default BasicRoute;
