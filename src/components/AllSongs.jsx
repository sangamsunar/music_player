import { useContext } from "react";
import { useMusic } from "../hooks/useMusic";
import { MusicContext } from "../contexts/MusicContext";

export const AllSongs = () => {
  const { allSongs, handlePlaySong, currentTractIndex } =
    useContext(MusicContext);
  return (
    <div className="all-songs">
      <h2>All Songs ({allSongs.length})</h2>
      <div className="songs-grid">
        {allSongs.map((song, key) => (
          <div
            key={key}
            className={`song-card ${currentTractIndex === key ? "active" : ""}`}
            onClick={() => {
              handlePlaySong(song, key);
            }}
          >
            <div className="song-info">
              <h3 className="song-title">{song.title}</h3>
              <p className="song-artist">{song.artist}</p>
              <span className="song-duration">{song.duration}</span>
            </div>
            <div className="play-button">
              {currentTractIndex === key ? "♪" : "▶︎"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
