import { useState } from "react";

const Example = () => {
  const [val, setVal] = useState("");

  const clearVal = () => setVal("");
  return (
    <div>
      <div>
        <label htmlFor="456">Label</label>
        <input
          type="text"
          id="456"
          placeholder="Hello"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
      </div>
      <h3>{val}</h3>
      <button onClick={clearVal}>Clear</button>
    </div>
  );
};

export default Example;
