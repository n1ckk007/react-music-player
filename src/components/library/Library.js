import React from "react";
import LibrarySong from "../library-song/LibrarySong";
import SearchBox from "../search-box/searchBox";
import "./Library.scss";

const Library = ({
  songs,
  setCurrentSong,
  libraryStatus,
  currentSong,
  searchTerm,
  handleChange,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <SearchBox searchTerm={searchTerm} handleChange={handleChange} />
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            setCurrentSong={setCurrentSong}
            key={song.id}
            song={song}
            currentSong={currentSong}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
