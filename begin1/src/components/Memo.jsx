import React, { useMemo } from "react";
import { useState } from "react";

const Memo = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const heavyCalc = (num) => {
    console.log("계산중 ....");

    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += num;
    }
    return result;
  };

  const calcValue = useMemo(() => heavyCalc(count2), [count2]);

  return (
    <div>
      <h3>Counter1 : {count1}</h3>
      <button onClick={() => setCount1(count1 + 1)}>+</button>
      <button onClick={() => setCount1(count1 - 1)}>-</button>
      <hr />
      <h3>Counter2 : {calcValue}</h3>
      <button onClick={() => setCount2(count2 + 1)}>+</button>
      <button onClick={() => setCount2(count2 - 1)}>-</button>
    </div>
  );
};

export default Memo;
