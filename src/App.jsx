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
    completed: true,
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

  const removeTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const updateTodo = (id) =>
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

  const clearComputed = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
      <Header />
      <main className="container mx-auto mt-8 px-4">
        <TodoForm createTodo={createTodo} />
        <TodoList
          todos={todos}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
        <TodoComputed
          computedItemsLeft={computedItemsLeft}
          clearComputed={clearComputed}
        />
        <TodoFilter />
      </main>

      <footer className="mt-8 text-center text-gray-400">
        Drag and drop to recorder list
      </footer>
    </div>
  );
}

export default App;
