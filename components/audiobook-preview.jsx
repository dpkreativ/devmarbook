"use client";

import { useRef, useState } from "react";
import Button from "./button";
import { AudibleIcon, audio_link } from "@/assets";

export default function AudiobookPreview() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function togglePlay() {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  }

  return (
    <>
      {/* Book with play button */}
      <div
        onClick={togglePlay}
        className="aspect-square w-full max-w-xs flex flex-col items-center justify-center bg-[--secondary-color] bg-[url(/book-front-min.jpg)] bg-cover bg-blend-multiply p-5 rounded-2xl shadow-2xl cursor-pointer"
      >
        <i
          className={`ri-${
            isPlaying ? "pause" : "play"
          }-circle-line text-9xl text-white drop-shadow-2xl shadow-[--secondary-color]`}
        ></i>
      </div>

      {/* Audiobook CTA */}
      <div className="grid md:grid-cols-2 gap-5">
        <Button secondary onClick={togglePlay}>
          <i className={`ri-${isPlaying ? "pause" : "play"}-circle-line`}></i>
          <span className="ml-2">{isPlaying ? "Pause" : "Play"} preview</span>
          <audio ref={audioRef} src="/audio.mp3"></audio>
        </Button>
        <a href={audio_link} target="_blank" rel="noopener noreferrer">
          <Button>
            <AudibleIcon />
            <div>Get audiobook</div>
          </Button>
        </a>
      </div>
    </>
  );
}
