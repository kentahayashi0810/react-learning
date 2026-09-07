import { useDispatch } from "react-redux";
import { useCounterDispatch } from "../context/CounterContext";

const CounterButton = ({ calcType, step }) => {
  // const dispatch = useCounterDispatch();
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch({ type: "counter/" + calcType, step });
  };

  return (
    <button onClick={clickHandler}>
      {calcType}
      {step}
    </button>
  );
};
export default CounterButton;
