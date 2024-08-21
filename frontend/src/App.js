import "./App.css";
import Home from "./Containers/Home/Home";
import Projects from "./Containers/Projects/Projects";
import Contact from "./Containers/Contact/Contact";

function App() {
  return (
    <div>
      <div className="background-image"></div>
      <div className="overlay"></div>
      <div className="App">
        <Home />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
