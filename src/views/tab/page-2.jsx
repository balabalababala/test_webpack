import React from "react";
import { useEffect } from "react";

const TopBarComponent = (props) => {
  const onShow = props.onShow;
  useEffect(() => {
    onShow && console.log("2");
  }, [onShow]);
  return <div>page-2</div>;
};

export default TopBarComponent;
