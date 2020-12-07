import React, { useEffect, useState } from "react";
import "./App.scss";
import Controls from "./components/controls/Controls";
import Library from "./components/library/Library";
import Nav from "./components/nav/Nav";
import Song from "./components/song/Song";
import data from "./data";

function App() {
  // data() function returns whole array of objects
  const [songs, setSongs] = useState(data());
  // grabs first song from array of objects
  const [currentSong, setCurrentSong] = useState(songs[0]);
  // state for if the music is playing
  const [isPlaying, setIsPlaying] = useState(false);
  // state for if library is open
  const [libraryStatus, setLibraryStatus] = useState(false);
  // for the search bar
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(songs);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const searchResults = songs.filter((song) =>
      song.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(searchResults);
  }, [searchTerm]);

  return (
    <div className={`app ${libraryStatus ? "library-active" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Controls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        songs={songs}
        setCurrentSong={setCurrentSong}
      />
      <Library
        songs={songs.length < 1 ? songs : searchResults}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
        searchTerm={searchTerm}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
        handleChange={handleChange}
      />
    </div>
  );
}

export default App;
