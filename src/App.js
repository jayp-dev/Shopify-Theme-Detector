// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";
import ThemeData from "./ThemeData";
import { useState } from "react";
function App() {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <Search setResponse={setResponse} setError={setError} />
        {response ? <ThemeData response={response} error={error} /> : null}
      </header>
    </div>
  );
}

export default App;
