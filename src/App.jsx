function App() {
  return (
    <div className="min-h-screen  bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
      <header className="container mx-auto px-4">
        <div className="flex justify-between">
          <h1 className="text-3xl font-semibold uppercase  tracking-[0.4em] text-white">
            Todo
          </h1>
          <button>Luna</button>
        </div>
        <form className="mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white py-4 px-4">
          <span className="inline-block h-5 w-5 rounded-full border-2"></span>
          <input
            type="text"
            placeholder="Create a new todo..."
            className="w-full text-gray-400 outline-none"
          />
        </form>
      </header>
      <main className="container mx-auto mt-8 px-4">
        <article>
          <button>Circulo</button>
          <p>Complete the course</p>
          <button>exiss</button>
        </article>
        <article>
          <button>Circulo</button>
          <p>Complete the course</p>
          <button>exiss</button>
        </article>
        <article>
          <button>Circulo</button>
          <p>Complete the course</p>
          <button>exiss</button>
        </article>

        <section>
          <span>5 items left</span>
          <button>Clear Completed</button>
        </section>
      </main>

      <section className="container mx-auto px-4">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </section>

      <p className="text-center">Drag and drop to recorder list</p>
    </div>
  );
}

export default App;
