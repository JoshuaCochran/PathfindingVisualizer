import React, { useState } from "react";
import { Layout, Button } from "antd";

const buttonStyle = {
    marginLeft: "4px",
    color: "black"
}

const clickedButtonStyle = {
    marginLeft: "4px",
    color: "blue"
}

const KeyHeader = () => {
  const [startClicked, setStartClicked] = useState(false);
  const [targetClicked, setTargetClicked] = useState(false);

  const onStartClick = () => {
    setStartClicked(!startClicked);
    setTargetClicked(false);
  };

  const onTargetClick = () => {
      setTargetClicked(!targetClicked)
      setStartClicked(false);
  }

  return (
    <Layout.Header>
      <Button icon="right" onClick={onStartClick} style={startClicked ? clickedButtonStyle : buttonStyle}>
        Start
      </Button>
      <Button icon="right-circle" onClick={onTargetClick} style={targetClicked ? clickedButtonStyle : buttonStyle}>Target</Button>
    </Layout.Header>
  );
};

export default KeyHeader;
