import { useState } from "react";
import "./App.scss";
import Controls from "./components/controls/Controls";
import Library from "./components/library/Library";
import Song from "./components/song/Song";
import data from "./data";

function App() {
  // data() function returns whole array of objects
  const [songs, setSongs] = useState(data());
  // grabs first song from array of objects
  const [currentSong, setCurrentSong] = useState(songs[0]);
  // state for if the music is playing
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Controls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
      <Library songs={songs} currentSong={currentSong} />
    </div>
  );
}

export default App;
