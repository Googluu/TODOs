import { useEffect, useState } from "react";
import { MoonIcon } from "./";
import { IconSun } from "./";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="container mx-auto px-4">
      <div className="flex justify-between">
        <h1 className="mt-5 text-3xl font-semibold uppercase  tracking-[0.4em] text-white">
          Todo
        </h1>
        <button className="mt-5" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <IconSun /> : <MoonIcon />}
        </button>
      </div>
    </header>
  );
};
