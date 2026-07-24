const Counter = ({ storage }) => {
  const activeTask = storage.filter((todo) => !todo.completed);
  const doneTask = storage.filter((todo) => todo.completed);
  return (
    <div className="counter-container">
      <p>Total tasks: {storage.length} </p>
      <p>Active tasks: {activeTask.length}</p>
      <p>Completed tasks: {doneTask.length}</p>
    </div>
  );
};

export default Counter;
