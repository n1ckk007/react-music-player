import React from "react";
import LibrarySong from "../library-song/LibrarySong";
import "./Library.scss";

const Library = ({ songs, setCurrentSong, setSongs, libraryStatus }) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            setCurrentSong={setCurrentSong}
            key={song.id}
            song={song}
            setSongs={setSongs}
            id={song.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
