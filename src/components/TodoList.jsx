import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos }) => {
  return (
    <div className="mt-8 rounded-t-md bg-white [&>article]:px-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
