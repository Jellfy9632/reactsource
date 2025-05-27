import React, { useContext } from "react";
import Child4 from "./Child4";
import { ToggleContext } from "../context/ToggleContext";

const Child3 = () => {
  const { isOn } = useContext(ToggleContext);
  return (
    <div>
      Child3
      <p>Toggle{isOn ? "On" : "Off"}</p>
      <Child4 />
    </div>
  );
};

export default Child3;
