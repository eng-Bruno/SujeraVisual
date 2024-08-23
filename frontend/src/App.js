import "./App.css";
import Home from "./Containers/Home/Home";
import Projects from "./Containers/Projects/Projects";
import Contact from "./Containers/Contact/Contact";
import Orçamento from "./Containers/Orçamento/Orçamento";

function App() {
  return (
    <div>
      <div className="background-image"></div>
      <div className="overlay"></div>
      <div className="App">
        <Home />
        <Projects />
        <Orçamento />
        <Contact />
      </div>
    </div>
  );
}

export default App;
