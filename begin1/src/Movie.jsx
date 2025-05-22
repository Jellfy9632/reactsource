import React, { useState } from "react";

const Movie = () => {
  // toggle

  const [btn, setBtn] = useState(true);
  const [src, setSrc] = useState("./img/boy1.jpg");

  const handleToggle = () => {
    if (btn) {
      setBtn(false);
      setSrc("./img/boy2.jpg");
      console.log(btn);
    } else {
      setBtn(true);
      setSrc("./img/boy1.jpg");
      console.log(btn);
    }
  };

  return (
    <div>
      <img src={src} alt="" width="300" height="500"></img>
      <button onClick={handleToggle}>change</button>
    </div>
  );
};

export default Movie;
