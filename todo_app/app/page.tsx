import AddNewTodo from "./add-new-todo";
import TodoList from "./todo-list";

export default function Home() {
  return (
    <main>
      <div>
        <AddNewTodo />
        <TodoList />
      </div>
    </main>
  );
}
