import { useState } from "react";

const songs = [
  {
    id: 1,
    title: "You",
    artist: "Radiohead",
    url: "/music/01. You.flac",
    duration: "3:28",
  },
  {
    id: 2,
    title: "Creep",
    artist: "Radiohead",
    url: "/music/02. Creep.flac",
    duration: "3:58",
  },
  {
    id: 3,
    title: "How Do You?",
    artist: "Radiohead",
    url: "/music/03. How Do You_.flac",
    duration: "2:12",
  },
  {
    id: 4,
    title: "Stop Whispering",
    artist: "Radiohead",
    url: "/music/04. Stop Whispering.flac",
    duration: "5:26",
  },
  {
    id: 5,
    title: "Thinking About You",
    artist: "Radiohead",
    url: "/music/05. Thinking About You.flac",
    duration: "2:41",
  },
];
export const useMusic = () => {
  const [allSongs, setAllSongs] = useState(songs);
  const [currentTrack, setCurrentTrack] = useState(songs[0]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  const handlePlaySong = (song, index) => {
    setCurrentTrack(song);
    setCurrentTrackIndex(index);
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => {
      const nextIndex = (prev + 1) % allSongs.length;
      setCurrentTrack(allSongs[nextIndex]);
      return nextIndex;
    });
    setIsPlaying(false);
  };

  const prevTrack = () => {
    setCurrentTrackIndex((prev) => {
      const nextIndex = prev === 0 ? allSongs.length - 1 : prev - 1;
      setCurrentTrack(allSongs[nextIndex]);
      return nextIndex;
    });
    setIsPlaying(false);
  };

  const formatTime = (time) => {
    if (isNaN(time) || time === undefined) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const play = () => setIsPlaying(true);
  const pause = () => setIsPlaying(false);
  return {
    allSongs,
    handlePlaySong,
    currentTrackIndex,
    currentTrack,
    setCurrentTime,
    currentTime,
    formatTime,
    duration,
    setDuration,
    nextTrack,
    prevTrack,
    isPlaying,
    pause,
    play,
    volume,
    setVolume,
  };
};
