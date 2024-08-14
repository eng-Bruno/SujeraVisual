import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";

function App() {
  return (
    <div>
      <div className="background-image"></div>
      <div className="overlay"></div>
      <div className="App">
        <Home />
      </div>
    </div>
  );
}

export default App;
