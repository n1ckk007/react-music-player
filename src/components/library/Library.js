import React from "react";
import LibrarySong from "../library-song/LibrarySong";
import "./Library.scss";

const Library = ({ songs, setCurrentSong }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            setCurrentSong={setCurrentSong}
            key={song.id}
            song={song}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
