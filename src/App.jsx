import { useEffect, useState } from "react";
import { DragDropContext } from "@hello-pangea/dnd";

import {
  Header,
  TodoForm,
  TodoList,
  TodoComputed,
  TodoFilter,
} from "./components";

const initialState = JSON.parse(localStorage.getItem("todos")) || [];

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [remove] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, remove);

  return result;
};

function App() {
  const [todos, setTodos] = useState(initialState);
  const [filter, setFilter] = useState("all");

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

  const filteredTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  const changeFilter = (e) => setFilter(e.target.value);

  const handleDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;
    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    )
      return;

    setTodos((prevTasks) =>
      reorder(prevTasks, source.index, destination.index)
    );
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat transition-all duration-1000 dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] md:bg-[url('./assets/images/bg-desktop-light.jpg')]  md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]">
      <Header />
      <main className="container mx-auto mt-8 px-4 md:max-w-xl">
        <TodoForm createTodo={createTodo} />
        <DragDropContext onDragEnd={handleDragEnd}>
          <TodoList
            todos={filteredTodos()}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
        </DragDropContext>
        <TodoComputed
          computedItemsLeft={computedItemsLeft}
          clearComputed={clearComputed}
        />
        <TodoFilter changeFilter={changeFilter} filter={filter} />
      </main>

      <footer className="mt-8 text-center text-gray-400 ">
        Drag and drop to recorder list
      </footer>
    </div>
  );
}

export default App;
