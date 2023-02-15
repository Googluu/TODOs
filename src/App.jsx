function App() {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-cover bg-center bg-no-repeat">
      <header className="container mx-auto px-4">
        <h1 className="uppercase">Todo</h1>
        <button>Luna</button>
        <form>
          <input type="text" placeholder="Create a new todo..." />
        </form>
      </header>
      <main className="container mx-auto px-4"></main>
    </div>
  );
}

export default App;
