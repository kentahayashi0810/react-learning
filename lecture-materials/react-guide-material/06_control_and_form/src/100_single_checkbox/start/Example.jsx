import { useState } from "react";

const Example = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div>
      <label htmlFor="my-check">Check:</label>
      <input
        type="checkbox"
        id="my-check"
        checked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
      />
      <p>{isChecked ? "ON" : "OFF"}</p>
    </div>
  );
};

export default Example;
