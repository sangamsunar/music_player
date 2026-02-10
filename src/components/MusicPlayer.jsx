import { useMusic } from "../hooks/useMusic";

export const MusicPlayer = () => {
  const { currentTrack, formatTime, currentTime, duration } = useMusic();
  return (
    <div className="music-player">
      <audio />
      <div className="track-info">
        <h3 className="tract-title">{currentTrack.title}</h3>
        <p className="tract-artist">{currentTrack.artist}</p>
      </div>

      <div className="progress-container">
        <span className="time">{formatTime(currentTime)}</span>
        <input
          type="range"
          min="0"
          max={duration || 0}
          step={0.1}
          value={currentTime || 0}
          className="progress-bar"
          // style={{}}
        />
        <span className="time">{formatTime(duration)}</span>
      </div>
    </div>
  );
};
