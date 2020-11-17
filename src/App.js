import { useState } from "react";
import "./App.scss";
import Controls from "./components/controls/Controls";
import Song from "./components/song/Song";
import data from "./data";

function App() {
  // data() function returns whole array of objects
  const [songs, setSongs] = useState(data());
  // grabs first song from array of objects
  const [currentSong, setCurrentSong] = useState(songs[0]);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Controls />
    </div>
  );
}

export default App;
