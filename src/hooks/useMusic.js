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
  const [currentTrack, setCurrentTrack] = useState(null);
  const [currentTractIndex, setCurrentTrackIndex] = useState(0);

  const handlePlaySong = (song, index) => {
    setCurrentTrack(song);
    setCurrentTrackIndex(index);
  };
  return { allSongs, handlePlaySong, currentTractIndex, currentTrack };
};
