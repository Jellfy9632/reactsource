import React, { useState } from "react";

const MyButton = ({ style, onClick, count }) => {
  return (
    <div>
      <button onClick={onClick} style={style}>
        Clicked {count} times
      </button>
    </div>
  );
};

export default MyButton;
