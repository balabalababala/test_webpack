import React from "react";

const Wrap2 = (props) => {
  return (
    <div>
      {props.children.son}
      {props.children.daughter}
    </div>
  );
};

class View extends React.Component {
  render() {
    return (
      <Wrap2>
        {{
          son: <div>我是儿子</div>,
          daughter: <div>我是女儿</div>,
        }}
      </Wrap2>
    );
  }
}

export default View;
