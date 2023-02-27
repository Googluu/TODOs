import { useState } from "react";
import {
  Header,
  TodoForm,
  TodoList,
  TodoComputed,
  TodoFilter,
} from "./components";

const initialState = [
  {
    id: 1,
    title: "Todo #1",
    completed: true,
  },
  {
    id: 2,
    title: "Todo #2",
    completed: false,
  },
  {
    id: 3,
    title: "Todo #3",
    completed: false,
  },
];

function App() {
  const [todos, setTodos] = useState(initialState);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
      <Header />
      <main className="container mx-auto mt-8 px-4">
        <TodoForm createTodo={createTodo} />
        <TodoList todos={todos} />
        <TodoComputed />
        <TodoFilter />
      </main>

      <footer className="mt-8 text-center text-gray-400">
        Drag and drop to recorder list
      </footer>
    </div>
  );
}

export default App;
