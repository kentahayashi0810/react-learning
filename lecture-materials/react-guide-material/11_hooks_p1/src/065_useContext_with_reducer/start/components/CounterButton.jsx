import { useUpdateCounter } from "../context/CounterContext";

const CounterButton = ({ calcType, step }) => {
  const dispatch = useUpdateCounter();
  const onClick = () => {
    dispatch({ type: calcType, step: step });
  };

  return (
    <button onClick={onClick}>
      {calcType}
      {step}
    </button>
  );
};
export default CounterButton;
