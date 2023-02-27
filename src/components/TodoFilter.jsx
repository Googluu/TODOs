export const TodoFilter = () => {
  return (
    <section className="container mx-auto mt-8">
      <div className="flex justify-center gap-4 rounded-md bg-white p-4">
        <button className="text-blue-600">All</button>
        <button className="hover:text-blue-600">Active</button>
        <button className="hover:text-blue-600">Completed</button>
      </div>
    </section>
  );
};
