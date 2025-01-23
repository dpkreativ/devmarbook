"use client";

import { useRef } from "react";
import Button from "./button";

export default function AudioPlayer() {
  const audioRef = useRef(null);

  function togglePlay() {
    if (audioRef.current) {
      audioRef.current.paused
        ? audioRef.current.play()
        : audioRef.current.pause();
    }
  }
  return (
    <Button secondary onClick={togglePlay}>
      <i class="ri-play-circle-line"></i>
      <div>Play sample</div>
      <audio ref={audioRef} src="/audio.mp3"></audio>
    </Button>
  );
}
