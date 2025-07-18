import React, { useState } from "react";

const Say = () => {
  const [message, setText] = useState("");
  const [color, setColor] = useState("black");

  const handleIn = () => {
    setText("안녕하세요");
  };
  const handleOut = () => {
    setText("안녕히가세요");
  };

  return (
    <div>
      <div>
        <button onClick={handleIn}>입장</button>
        <button onClick={handleOut}>퇴장</button>
      </div>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        빨간색
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        파란색
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        초록색
      </button>
    </div>
  );
};

export default Say;
