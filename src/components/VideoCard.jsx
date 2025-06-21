import React, { useRef, useEffect, useState } from 'react';
import useInView from '../hooks/useInView';
import {
  Heart,
  MessageCircle,
  Send,
  IndianRupee,
  MoreVertical,
} from 'lucide-react';


// the video plays directly after loading
function VideoCard({ item }) {
  const [ref, isInView] = useInView();
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const tapTimer = useRef(null);

  useEffect(() => {
    const vid = videoRef.current;
    if (vid) {
      if (isInView) {
        vid.play();
        setPlaying(true);
      } else {
        vid.pause();
        setPlaying(false);
      }
    }
  }, [isInView]);

  const handleVideoTap = (e) => {
    e.preventDefault();
    
    if (tapTimer.current) {
      // for likes
      clearTimeout(tapTimer.current);
      tapTimer.current = null;
      handleDoubleTapLike();
      return;
    }
    // for play/pause
    tapTimer.current = setTimeout(() => {
      togglePlayPause();
      tapTimer.current = null;
    }, 250);
  };

  const togglePlayPause = () => {
    const vid = videoRef.current;
    if (!vid) return;

    if (vid.paused) {
      vid.play();
      setPlaying(true);
    } else {
      vid.pause();
      setPlaying(false);
    }
    console.log("Video toggled:", playing ? "paused" : "playing");
  };

  const handleDoubleTapLike = () => {
    setIsLiked(prev => !prev);
    console.log("Double tap like:", item.id);
  };

  const onLikeBtn = () => {
    setIsLiked(prev => !prev);
    console.log("Like button clicked:", item.id);
  };

  return (
    <div
      ref={ref}
      className="relative h-[calc(100vh-64px)] w-full snap-start flex justify-center items-center bg-black"
    >
      <video
        ref={videoRef}
        src={item.videoUrl}
        muted={muted}
        loop
        playsInline
        onClick={handleVideoTap}
        className="h-full w-full max-w-[480px] object-cover rounded-md cursor-pointer select-none"
        style={{ WebkitUserSelect: 'none', userSelect: 'none' }}
      />

      {/* Play/Pause */}
      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-black/50 rounded-full p-4">
            <div className="text-white text-4xl">▶️</div>
          </div>
        </div>
      )}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      </div>

      {/* bottomnav */}
      <div className="absolute inset-0 flex justify-between p-4 text-white pointer-events-none">
        <div className="flex flex-col justify-end pb-20 w-[70%]">
          <p className="text-sm opacity-90">{item.hashtag}</p>

          <div className="flex items-center gap-2 mt-2">
            <img
              src={item.userImage}
              alt="user"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="font-semibold text-sm">{item.userName}</span>
            <button 
              className="ml-2 px-3 py-1 bg-red-600 text-xs rounded-full pointer-events-auto hover:bg-red-700"
              onClick={(e) => e.stopPropagation()}
            >
              Follow
            </button>
          </div>

          <p className="mt-2 font-medium text-sm leading-tight">{item.title}</p>
          <p className="text-xs line-clamp-3 text-gray-200 mt-1">
            {item.description}
          </p>
        </div>


        {/* Right side actions as given in the pdf */}
        <div className="flex flex-col justify-end items-center gap-5 pb-20">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onLikeBtn();
            }}
            className="flex flex-col items-center hover:scale-110 transition-transform pointer-events-auto"
          >
            <Heart
              size={26}
              strokeWidth={isLiked ? 2.5 : 1.5}
              fill={isLiked ? 'red' : 'none'}
              className={isLiked ? 'text-red-500' : 'text-white'}
            />
            <span className="text-xs mt-1">{item.likes}</span>
          </button>

          <div className="flex flex-col items-center">
            <MessageCircle size={24} />
            <span className="text-xs mt-1">{item.comments}</span>
          </div>

          <div className="flex flex-col items-center">
            <Send size={24} />
            <span className="text-xs mt-1">{item.shares}</span>
          </div>

          <div className="flex flex-col items-center">
            <IndianRupee size={24} />
            <span className="text-xs mt-1">{item.earnings}</span>
          </div>

          <button className="flex flex-col items-center pointer-events-auto">
            <MoreVertical size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;