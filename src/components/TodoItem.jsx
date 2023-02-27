import { CrossIcon, IconCheck } from "./";

export const TodoItem = ({ todo: { title, id, completed } }) => {
  return (
    <article className="flex gap-4 border-b border-b-gray-300 py-4">
      <button className="inline-block h-5 w-5 flex-none rounded-full border-2">
        <IconCheck />
      </button>
      <p className="grow text-gray-600">{title}</p>
      <button className="flex-none">
        <CrossIcon />
      </button>
    </article>
  );
};
