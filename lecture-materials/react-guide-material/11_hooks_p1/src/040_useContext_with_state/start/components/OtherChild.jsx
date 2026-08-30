import { useContext } from "react";
import { MyContext } from "../Example";

const OtherChild = () => {
  const clickHandler = (e) => {
    setValue((prev) => prev + 1);
  };

  const [, setValue] = useContext(MyContext);

  return (
    <div>
      <h3>他の子コンポーネント</h3>
      <button onClick={clickHandler}>+</button>
    </div>
  );
};

export default OtherChild;
