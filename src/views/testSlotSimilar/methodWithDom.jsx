import React from "react";

const Wrap1 = (props) => {
  return <div>{props.children}</div>;
};

class View extends React.Component {
  render() {
    return (
      <div>
        <Wrap1>我是孩子</Wrap1>
      </div>
    );
  }
}

export default View;
