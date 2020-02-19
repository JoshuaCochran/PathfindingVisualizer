import React, { useState } from "react";
import { Icon } from "antd";

const Node = ({ nodeType }) => {
  const [f, setF] = useState(0);
  const [g, setG] = useState(0);
  const [h, setH] = useState(0);
  const [parent, setParent] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [color, setColor] = useState("white");

  const onClick = () => {
    clicked ? setColor("white") : setColor("green");
    setClicked(!clicked);
  };

  const nodeStyle = {
    outline: "1px solid CornflowerBlue",
    height: "calc(5% - 1px)",
    width: "calc(5% - 1px)",
    background: color,
    margin: "auto",
    textAlign: "center"
  };

  let type = "";
  if (nodeType === "start") type = "right";
  else if (nodeType === "target") type = "right-circle";

  console.log(nodeType);
  return (
    <div onClick={onClick} style={nodeStyle}>
      {type !== "" ? <Icon type={type} /> : null}
    </div>
  );
};

export default Node;
