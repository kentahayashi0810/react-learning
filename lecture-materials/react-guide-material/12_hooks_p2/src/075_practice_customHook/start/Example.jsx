import { useCount } from "./hooks";

const Example = () => {
  const { counter, countUp } = useCount();
  return (
    <>
      <div>Counts: {counter}</div>
      <button onClick={countUp}>Count Up!</button>
    </>
  );
};

export default Example;
