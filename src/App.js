import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Search Engine</h1>
        <Weather />
        <footer>
          The project is on{"  "}
          <a href="https://github.com/nija10/weather-react">Github</a> and
          hosted on
          <a href="#">Netlify</a>
        </footer>
      </header>
    </div>
  );
}

export default App;
