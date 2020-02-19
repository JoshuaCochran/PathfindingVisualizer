import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import "../css/App.css";
import Node from "../features/nodes/Node";
import KeyHeader from "../features/headers/KeyHeader";

const nodeContainerStyle = {
  width: "90vw",
  height: "90vh",
  display: "flex",
  flexWrap: "wrap",
  margin: "auto",
  marginTop: "10px"
};

const createNodes = num => {
  let nodes = [];
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      if (i === 5 && j === 5) nodes.push(<Node nodeType="start" />);
      else if (i === 10 && j === 10) nodes.push(<Node nodeType="target" />);
      else nodes.push(<Node nodeType="empty" />);
    }
  }

  return nodes;
};

function App() {
  const [nodes, setNodes] = useState([]);
  useEffect(() => {
    setNodes(createNodes(20));
  }, []);

  return (
    <>
      <KeyHeader />
      <div style={nodeContainerStyle}>{nodes}</div>
    </>
  );
}

export default App;
