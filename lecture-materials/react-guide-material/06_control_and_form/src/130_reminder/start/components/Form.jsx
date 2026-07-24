const Form = ({ todoInputState, addTodo }) => {
  const [todoInput, setTodoInput] = todoInputState;

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
