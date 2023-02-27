import {
  Header,
  TodoForm,
  TodoList,
  TodoComputed,
  TodoFilter,
} from "./components";

function App() {
  return (
    <div className="min-h-screen  bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
      <Header />
      <main className="container mx-auto mt-8 px-4">
        <TodoForm />
        <TodoList />
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
