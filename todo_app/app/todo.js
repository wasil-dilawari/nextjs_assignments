"use client";

function update(todo, id, state) {
  for (let x in todo) {
    if (todo[x].id === id) {
      todo[x].status = state;
    }
  }
  todo.id.status = status;
}

export default function Todo({ todo }) {
  return (
    <>
      <input
        type="checkbox"
        onChange={(e) => update(todo, todo.id, e.target.checked)}
      />
      <span>{todo.name}</span>
      <button>Delete</button>
    </>
  );
}
