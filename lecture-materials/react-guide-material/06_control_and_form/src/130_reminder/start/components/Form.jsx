import { useState } from "react";
import { nanoid } from "nanoid";

const Form = ({ createTodo }) => {
  const [todoInput, setTodoInput] = useState("");

  const addTodo = () => {
    const newTodo = {
      id: nanoid(),
      content: todoInput,
    };
    createTodo(newTodo);
    setTodoInput("");
  };

  return (
    <>
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button onClick={addTodo}>追加</button>
    </>
  );
};

export default Form;
