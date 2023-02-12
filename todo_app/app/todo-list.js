import Todo from "./todo";

export default function TodoList() {
  const todos = [
    { id: 1, name: "Dummy Task 1", status: false },
    { id: 2, name: "Dummy Task 2", status: false },
    { id: 3, name: "Dummy Task 3", status: false },
  ];

  return (
    <div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todos.map((t) => {
          return (
            <li key={t.id} style={{ padding: "5px 0" }}>
              <Todo todo={t} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
