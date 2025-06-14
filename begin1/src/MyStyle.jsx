import React from "react";

const MyStyle = () => {
  const style = {
    background: "black",
    color: "aqua",
    fontSize: "48px",
    fontWeight: "bold",
    padding: 16,
  };
  return (
    <div>
      <div style={style}>홍길동</div>
      <div style={{ color: "red", fontSize: "25px" }}>오미자</div>
      {/* class == className, maxlength == maxLength, readonly == readOnly */}
      <input type="text" className="" maxLength={20} readOnly={false} />
      <br />
    </div>
  );
};

export default MyStyle;
