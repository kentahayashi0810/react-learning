import { useReducer } from "react";

const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];

const reducer = (prev, { type, payload }) => {
  switch (type) {
    case "change":
      const { name, value } = payload;
      return { ...prev, [name]: value };

    case "add":
      return { ...prev, result: Number(prev.a) + Number(prev.b) };

    case "minus":
      return { ...prev, result: Number(prev.a) - Number(prev.b) };

    case "divide":
      return { ...prev, result: Number(prev.a) / Number(prev.b) };

    case "multiply":
      return { ...prev, result: Number(prev.a) * Number(prev.b) };

    default:
      throw new Error("operator is not correct");
  }
};

const Example = () => {
  const initState = {
    a: 1,
    b: 2,
    result: 3,
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const calculate = (e) => {
    dispatch({ type: e.target.value });
  };

  const numChangeHandler = (e) => {
    dispatch({
      type: "change",
      payload: {
        name: e.target.name,
        value: e.target.value,
      },
    });
  };

  return (
    <>
      <div>
        a:
        <input
          type="number"
          name="a"
          value={state.a}
          onChange={numChangeHandler}
        />
      </div>
      <div>
        b:
        <input
          type="number"
          name="b"
          value={state.b}
          onChange={numChangeHandler}
        />
      </div>
      <select value={state.type} name="type" onChange={calculate}>
        {CALC_OPTIONS.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <h1>結果：{state.result}</h1>
    </>
  );
};

export default Example;
