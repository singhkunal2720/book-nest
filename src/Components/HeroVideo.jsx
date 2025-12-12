import React, { useRef, useState } from "react";
import { Play } from "lucide-react";
import IntroVideo from '../assets/intro-video.mp4'
import img5 from '../assets/5.png'

const HeroVideo = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={IntroVideo} // Replace with your video path
        poster={img5} // Optional: video poster
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Play Button */}
      {!isPlaying && (
        <button
          onClick={handlePlay}
          className="absolute z-20 inset-0 flex items-center justify-center"
        >
          <div className="relative group">
            {/* Pulsing Circle */}
            <div className="absolute inset-0 rounded-full bg-yellow-400 opacity-50 animate-ping scale-110" />
            {/* Play Button */}
            <div className="p-6 bg-yellow-400 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
              <Play className="w-8 h-8 text-black" />
            </div>
          </div>
        </button>
      )}
    </div>
  );
};

export default HeroVideo;
