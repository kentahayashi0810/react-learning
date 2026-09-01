import { useTodo, useTodoDispatch } from "../context/TodoContext";

const List = () => {
  const dispatch = useTodoDispatch();
  const todos = useTodo();

  const complete = (id) => {
    dispatch({ type: "DELETE", id });
  };
  const toggleEdit = (id) => {
    dispatch({ type: "TOGGLE-EDIT", id });
  };
  const updateTodoContent = (content) => {
    dispatch({ type: "UPDATE", content });
  };

  console.log(todos);

  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <button onClick={() => complete(todo.id)}>完了</button>
            {todo.editing ? (
              <input
                type="text"
                value={todo.content}
                onChange={(e) => updateTodoContent(e.target.value)}
              />
            ) : (
              <span onDoubleClick={() => toggleEdit(todo.id)}>
                {todo.content}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default List;
