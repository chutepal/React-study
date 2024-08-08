import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Navbar from "./components/Navbar";

// Reference tutorial: https://www.youtube.com/watch?v=RbxHZwFtRT4&list=PL6QREj8te1P6wX9m5KnicnDVEucbOPsqR
function App() {
  return (
    <main className="bg-black">
      <Navbar/>
      <Hero/>
      <Highlights/>
    </main>
  );
}

export default App;
