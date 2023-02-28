export const TodoComputed = ({ computedItemsLeft, clearComputed }) => {
  return (
    <section className="flex justify-between rounded-b-md bg-white py-4 px-4">
      <span className="text-gray-400">{computedItemsLeft} items left</span>
      <button className="text-gray-400" onClick={() => clearComputed()}>
        Clear Completed
      </button>
    </section>
  );
};
