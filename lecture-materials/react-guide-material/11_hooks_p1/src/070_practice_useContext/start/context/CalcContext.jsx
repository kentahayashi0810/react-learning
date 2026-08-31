import { createContext, useContext, useReducer } from "react";

const CalcContext = createContext();
const CalcDispatchContext = createContext();

const reducer = (state, { type, payload }) => {
  const a = Number(state.a);
  const b = Number(state.b);
  switch (type) {
    case "change": {
      const { name, value } = payload;
      return { ...state, [name]: value };
    }
    case "add": {
      return { ...state, result: a + b };
    }
    case "minus": {
      return { ...state, result: a - b };
    }
    case "divide": {
      return { ...state, result: a / b };
    }
    case "multiply": {
      return { ...state, result: a * b };
    }
    default:
      throw new Error("operator is invalid");
  }
};
const initState = {
  a: 1,
  b: 2,
  result: 3,
};

const CalcProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <CalcContext.Provider value={state}>
      <CalcDispatchContext.Provider value={dispatch}>
        {children}
      </CalcDispatchContext.Provider>
    </CalcContext.Provider>
  );
};

const useCalc = () => useContext(CalcContext);
const useCalcDispatch = () => useContext(CalcDispatchContext);

export { CalcProvider, useCalc, useCalcDispatch };
