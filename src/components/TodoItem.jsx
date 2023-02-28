import { CrossIcon, IconCheck } from "./";

export const TodoItem = ({
  todo: { title, id, completed },
  removeTodo,
  updateTodo,
}) => {
  const p = "inline-block";
  const c =
    "grid place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500";

  return (
    <article className="flex gap-4 border-b border-b-gray-300 py-4">
      <button
        className={`h-6 w-6 flex-none rounded-full border-2 ${
          completed ? c : p
        }`}
        onClick={() => updateTodo(id)}
      >
        {completed && <IconCheck />}
      </button>
      <p
        className={`grow text-gray-600 ${
          completed && "text-gray-300 line-through"
        }`}
      >
        {title}
      </p>
      <button className="flex-none" onClick={() => removeTodo(id)}>
        <CrossIcon />
      </button>
    </article>
  );
};
