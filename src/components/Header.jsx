import { useEffect, useState } from "react";
import { MoonIcon } from "./";
import { IconSun } from "./";

const initialStateDarkMode = localStorage.getItem("theme") === "dark";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(initialStateDarkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="container mx-auto px-4 md:max-w-xl">
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
