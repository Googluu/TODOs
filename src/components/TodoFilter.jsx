export const TodoFilter = ({ changeFilter, filter }) => {
  return (
    <section className="container mx-auto mt-8">
      <div className="flex justify-center gap-4 rounded-md bg-white p-4">
        <button
          className={`${
            filter === "all"
              ? "text-blue-500 hover:text-gray-400"
              : "text-gray-400 hover:text-blue-500"
          }`}
          value="all"
          onClick={changeFilter}
        >
          All
        </button>
        <button
          className={`${
            filter === "active"
              ? "text-blue-500 hover:text-gray-400"
              : "text-gray-400 hover:text-blue-500"
          }`}
          value="active"
          onClick={changeFilter}
        >
          Active
        </button>
        <button
          className={`${
            filter === "completed"
              ? "text-blue-500 hover:text-gray-400"
              : "text-gray-400 hover:text-blue-500"
          }`}
          value="completed"
          onClick={changeFilter}
        >
          Completed
        </button>
      </div>
    </section>
  );
};
