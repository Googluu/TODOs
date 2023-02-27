import { CrossIcon } from "./icons/CrossIcon";

export const TodoList = () => {
  return (
    <div className="mt-8 rounded-t-md bg-white [&>article]:px-4">
      <article className="flex gap-4 border-b border-b-gray-300 py-4">
        <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
        <p className="grow text-gray-600">Complete the course</p>
        <button className="flex-none">
          <CrossIcon />
        </button>
      </article>
      <article className="flex gap-4 border-b border-b-gray-300 py-4">
        <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
        <p className="grow text-gray-600">Complete the course</p>
        <button className="flex-none">
          <CrossIcon />
        </button>
      </article>
      <article className="flex gap-4 border-b border-b-gray-300 py-4">
        <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
        <p className="grow text-gray-600">Complete the course</p>
        <button className="flex-none">
          <CrossIcon />
        </button>
      </article>
    </div>
  );
};
