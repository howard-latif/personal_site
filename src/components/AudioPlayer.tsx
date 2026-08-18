import { createSignal } from "solid-js";

export default function AudioPlayer() {
  let audioRef!: HTMLAudioElement;
  const [isPlaying, setIsPlaying] = createSignal(false);

  const togglePlay = () => {
    if (audioRef.paused) {
      audioRef.play();
      setIsPlaying(true);
    } else {
      audioRef.pause();
      setIsPlaying(false);
    }
    // SIGNAL NEEDS TO UPDATE ON AUDIO FINISH
  };

  return (
    <div>
      <audio ref={audioRef} src="/personal_site/audio/hands_pjano.m4a" />
      <button onClick={togglePlay}>{isPlaying() ? "Pause" : "Play"}</button>
    </div>
  );
}
