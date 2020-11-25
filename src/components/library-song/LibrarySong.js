import React from "react";
import "./LibrarySong.scss";

const LibrarySong = ({ song, songs, setCurrentSong }) => {
  const songSelectHandler = () => {
    // sets current song to the selected song
    setCurrentSong(song);
  };

  return (
    <div onClick={songSelectHandler} className="library-song">
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
