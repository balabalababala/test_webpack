import React from "react";

const Wrap3 = (props) => {
  const info = props.children;
  return <div>{info("This Is Name", 32)}</div>;
};

class View extends React.Component {
  render() {
    return (
      <Wrap3>
        {(name, age) => {
          return (
            <div>
              name: {name} <br />
              age: {age}
            </div>
          );
        }}
      </Wrap3>
    );
  }
}

export default View;
