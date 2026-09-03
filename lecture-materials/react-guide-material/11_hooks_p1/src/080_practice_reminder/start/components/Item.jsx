import { useState } from "react";
import { useTodoDispatch } from "../context/TodoContext";

const Item = ({ todo }) => {
  const [editingContent, setEditingContent] = useState(todo.content);
  const changeContent = (content) => setEditingContent(content);

  const dispatch = useTodoDispatch();

  const complete = (todo) => {
    dispatch({ type: "DELETE", payload: todo });
  };

  const updateTodo = (todo) => {
    dispatch({ type: "UPDATE", payload: todo });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTodo({ ...todo, content: editingContent, editing: false });
  };

  const startEditing = () => {
    updateTodo({ ...todo, editing: true });
  };

  return (
    <div key={todo.id}>
      <button onClick={() => complete(todo.id)}>完了</button>
      <form onSubmit={(e) => handleSubmit(e)}>
        {todo.editing ? (
          <input
            type="text"
            value={editingContent}
            onChange={(e) => changeContent(e.target.value)}
          />
        ) : (
          <span onDoubleClick={() => startEditing()}>{todo.content}</span>
        )}
      </form>
    </div>
  );
};

export default Item;
