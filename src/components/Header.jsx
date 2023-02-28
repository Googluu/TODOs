import { MoonIcon } from "./";

export const Header = () => {
  return (
    <header className="container mx-auto px-4">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold uppercase  tracking-[0.4em] text-white">
          Todo
        </h1>
        <button>
          <MoonIcon className="fill-red-500" />
        </button>
      </div>
    </header>
  );
};
