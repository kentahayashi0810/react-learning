import { createContext, useContext, useReducer } from "react";

const CounterContext = createContext();
const CounterUpdateContext = createContext();

const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer((prev, { type, step }) => {
    switch (type) {
      case "+":
        return prev + step;
      case "-":
        return prev - step;
      default:
        throw new Error("不明なactionです。");
    }
  }, 0);

  return (
    <CounterContext.Provider value={state}>
      <CounterUpdateContext.Provider value={dispatch}>
        {children}
      </CounterUpdateContext.Provider>
    </CounterContext.Provider>
  );
};

const useCounter = () => useContext(CounterContext);
const useUpdateCounter = () => useContext(CounterUpdateContext);

export { useCounter, useUpdateCounter, CounterProvider };
