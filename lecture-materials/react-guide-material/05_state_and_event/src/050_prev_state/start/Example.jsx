import { useState } from "react";

const Example = () => {
  const [count, setcount] = useState(0);
  const MIN_COUNT = 0;

  const countUp = () => {
    setcount(count + 1);
    setcount((prev) => prev + 1);
  };
  const countDown = () => {
    if (count > MIN_COUNT) {
      setcount(count - 1);
    }
  };

  return (
    <>
      <p>現在のカウント数：{count}</p>
      <button type="button" onClick={countUp}>
        +
      </button>
      <button type="button" onClick={countDown}>
        -
      </button>
    </>
  );
};

export default Example;
