import "./App.css";
import Controls from "./components/controls/Controls";
import Song from "./components/song/Song";
import data from "./data";

function App() {
  return (
    <div className="App">
      <Song />
      <Controls />
    </div>
  );
}

export default App;
