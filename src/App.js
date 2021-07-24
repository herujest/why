import logo from "./assets/icons/wehelpyou-logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Wehelpyou</h3>
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is unofficial mobile documentation</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to skip
        </a>
      </header>
    </div>
  );
}

export default App;
