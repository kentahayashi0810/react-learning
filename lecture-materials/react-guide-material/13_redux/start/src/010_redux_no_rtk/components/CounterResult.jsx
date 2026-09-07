import { useSelector } from "react-redux";
import { useCounter } from "../context/CounterContext";

const CounterResult = () => {
  // const state = useCounter();
  const state = useSelector((state) => state.counter);
  const state2 = useSelector((state) => state.counter2);
  return (
    <h3>
      {state} : {state2}
    </h3>
  );
};

export default CounterResult;
