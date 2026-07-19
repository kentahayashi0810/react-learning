import { useState } from "react";

const Example = () => {
  const [buttonA, setButtonA] = useState(0);
  const [buttonB, setButtonB] = useState(0);
  const [buttonC, setButtonC] = useState(0);

  return (
    <>
      <p>ボタンAを{buttonA}回押しました！</p>
      <button type="button" onClick={() => setButtonA(buttonA + 1)}>
        ボタンA
      </button>
      <p>ボタンBを{buttonB}回押しました！</p>
      <button type="button" onClick={() => setButtonB(buttonB + 1)}>
        ボタンB
      </button>
      <p>ボタンCを{buttonC}回押しました！</p>
      <button type="button" onClick={() => setButtonC(buttonC + 1)}>
        ボタンC
      </button>
    </>
  );
};

export default Example;
