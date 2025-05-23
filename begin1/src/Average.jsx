import React, { useMemo, useState } from "react";

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState([]);

  const getAverage = (numbers) => {
    console.log("평균 계산 중....");
    if (numbers.lenght == 0) return;

    // let sum = 0;
    // let cnt = 0;
    // list.forEach((element) => {
    //   sum += element;
    // });
    // const avg = sum / numbers.lenght;
    // return avg;

    //reduce (함수)
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
  };
  const handleClick = () => {
    //list에 추가
    const nextList = list.concat(parseInt(number));
    //setList에 할당
    setList(nextList);
    setNumber("");
    console.log(list);
  };

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input
        type="text"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <button onClick={handleClick}>등록</button>
      <ul>
        {list.map((value, idx) => (
          <li key={idx}>{value}</li>
        ))}
      </ul>
      <div>number: {number}</div>
      <div>평균: {avg}</div>
    </div>
  );
};

export default Average;
