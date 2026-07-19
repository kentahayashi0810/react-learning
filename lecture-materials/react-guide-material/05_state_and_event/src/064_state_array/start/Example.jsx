import { useState } from "react";

const Example = () => {
  const numArray = [1, 2, 3, 4, 5];

  const [arr, setArr] = useState(numArray);

  const shuffle = () => {
    setArr((arr) => {
      const shuffledArr = [...arr];
      const num = shuffledArr.pop();
      shuffledArr.unshift(num);
      return shuffledArr;
    });
  };

  return (
    <>
      <h1>{arr}</h1>
      <button onClick={shuffle}>shuffle</button>
    </>
  );
};

export default Example;
