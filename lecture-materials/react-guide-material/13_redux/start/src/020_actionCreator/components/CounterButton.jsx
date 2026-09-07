import { useDispatch } from "react-redux";
import { add, minus } from "../store/modules/counter";

const CounterButton = ({ calcType, step: payload }) => {
  const dispatch = useDispatch();
  // const dispatch = useCounterDispatch();

  const clickHandler = () => {
    const action = calcType === "+" ? add(payload) : minus(payload);
    dispatch(action);
  };

  return (
    <button onClick={clickHandler}>
      {calcType}
      {payload}
    </button>
  );
};
export default CounterButton;
