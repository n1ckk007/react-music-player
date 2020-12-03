import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPlay,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import "./Controls.scss";

const Controls = ({
  currentSong,
  isPlaying,
  setIsPlaying,
  songs,
  setCurrentSong,
}) => {
  const [songInfo, setSongInfo] = useState({ currentTime: 0, duration: 0 });
  // Ref
  const audioRef = useRef(null);

  // Event Handlers
  const playSongHandler = () => {
    // console.log(audioRef.current);
    // if the song is playing and you click on the button you want to pause it
    if (isPlaying) {
      audioRef.current.pause();
      // switching the state on and off
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  // direction to skip back or forward
  const skipTrackHandler = (direction) => {
    if (typeof direction !== "number") return;
    let currentIndex = songs.indexOf(currentSong) + direction;
    if (currentIndex < 0) currentIndex = songs.length - 1;
    if (currentIndex > songs.length - 1) currentIndex = 0;
    setCurrentSong(songs[currentIndex]);
  };

  // Whenever the current song changes and the
  // status is playing, automatically play the new song
  useEffect(() => {
    if (isPlaying && audioRef.current.paused) {
      audioRef.current.play();
    }
  }, [isPlaying, currentSong]);

  // onTimeUpdate on audio tag gives us event that we can extract the current time in the song and also the duration
  const timeUpdateHandler = (e) => {
    // console.log(e);
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration });
  };

  // to format time nicely
  const getTime = (time) => {
    return (
      // gets ride of decimal points and puts in seconds and minutes
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  // to make slider draggable
  const dragHandler = (e) => {
    // console.log(e.target.value);
    // updates the <audio>
    audioRef.current.currentTime = e.target.value;
    // whatever we had, keep it but update the current time
    // setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    return;
  };

  return (
    <div className="controls-container">
      <div className="time-control">
        {/* envoke the getTime func and pass down current time */}
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          className="track"
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
          }}
        >
          <input
            min={0}
            // add a default value to prevent the NaN error; song duration or 0
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            type="range"
            // everytime we move slider this event will run
            onChange={dragHandler}
          />
          <div
            className="animate-track"
            style={{
              transform: `translateX(${
                (songInfo.currentTime / songInfo.duration) * 100
              }%)`,
            }}
          ></div>
        </div>
        <p>{getTime(songInfo.duration || 0)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
          // arrow function to envoke it so it doesn't run instantly
          onClick={() => skipTrackHandler(-1)}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
          onClick={() => skipTrackHandler(1)}
        />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        // to update end time when rendering initially
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        // runs this when the song ends
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
};

export default Controls;
