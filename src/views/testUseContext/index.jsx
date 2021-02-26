import React, { useState, useCallback, useContext } from "react";
import Home from "../component/home";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

const ThemeContext = React.createContext(themes.light);
// const ThemeContext = React.createContext(); // 默认值为空，必须用 Provider 包裹子组件，提供value属性，子组件才能取到context中的值

function App() {
  return (
    <>
    {/* <ThemeContext.Provider value={themes.light}> */}
      <Toolbar />
      <Toolbar />
    {/* </ThemeContext.Provider> */}
    </>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}

export default function () {
  return (
    <div>
      <Home />
      <App></App>
    </div>
  );
}
