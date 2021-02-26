import React from "react";
import { useEffect } from "react";

const TopBarComponent = (props) => {
  const onShow = props.onShow;
  useEffect(() => {
    onShow && console.log("3");
  }, [onShow]);
  return <div>page-3</div>;
};

export default TopBarComponent;
