import React from "react";
import "./LibrarySong.scss";

const LibrarySong = ({ song, setCurrentSong, currentSong }) => {
  const songSelectHandler = () => {
    // sets current song to the selected song
    setCurrentSong(song);
  };

  return (
    <div
      onClick={songSelectHandler}
      // // if song is active added the selected class
      // className={`library-song ${song.active ? "selected" : ""}`}
      // avoid the need for updating the active song in the library, use the following code instead of checking adding the class based on 'song.active':
      className={`library-song ${song.id === currentSong.id ? "selected" : ""}`}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
