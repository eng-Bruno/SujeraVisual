import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

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
