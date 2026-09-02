import { useTodo, useTodoDispatch } from "../context/TodoContext";

const List = () => {
  const dispatch = useTodoDispatch();
  const todos = useTodo();

  const complete = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };
  const updateEditingState = (id, editing) => {
    dispatch({ type: "UPDATE_EDIT_STATE", payload: { id, editing } });
  };
  const startEditing = (id) => updateEditingState(id, true);
  const finishEditing = (id) => updateEditingState(id, false);

  const updateTodoContent = (id, content) => {
    dispatch({ type: "UPDATE", payload: { id, content } });
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
                onChange={(e) => updateTodoContent(todo.id, e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    finishEditing(todo.id);
                  }
                }}
              />
            ) : (
              <span onDoubleClick={() => startEditing(todo.id)}>
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
