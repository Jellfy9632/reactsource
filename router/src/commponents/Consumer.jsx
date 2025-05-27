import React from "react";
import Child1 from "./Child1";
import { CountProvider } from "../context/CountContext";
import { ToggleProvider } from "../context/ToggleContext";
import Child3 from "./Child3";

const Consumer = () => {
  return (
    <>
      <CountProvider>
        <h2>Count Consumer</h2>
        <Child1 />
      </CountProvider>
      <ToggleProvider>
        <Child3 />
      </ToggleProvider>
    </>
  );
};

export default Consumer;
