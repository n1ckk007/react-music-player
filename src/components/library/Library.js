import React from "react";
import LibrarySong from "../library-song/LibrarySong";
import "./Library.scss";

const Library = ({ songs }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song, i) => (
          <LibrarySong key={i} song={song} />
        ))}
      </div>
    </div>
  );
};

export default Library;
