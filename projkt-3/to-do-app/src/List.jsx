const List = ({
  renderData,
  handleClick,
  editId,
  editText,
  setEditText,
  editTodo,
  saveEdit,
  setEditId,
  toggleComplete,
}) => {
  return (
    <ul className="list-container">
      {renderData.map((todos) => (
        <li className="todo-container" key={todos.id}>
          {editId === todos.id ? (
            <input
              className="edit-input"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onBlur={() => saveEdit(todos.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  saveEdit(todos.id);
                } else if (e.key === "Escape") {
                  setEditText(todos.todo);
                  setEditId(null);
                }
              }}
              autoFocus
            />
          ) : (
            <span
              onClick={() => toggleComplete(todos.id)}
              onDoubleClick={() => {
                editTodo(todos.id, todos.todo);
              }}
              className={todos.completed ? "completed" : ""}
            >
              {todos.todo}
            </span>
          )}

          <button className="delete-btn" onClick={() => handleClick(todos.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;
