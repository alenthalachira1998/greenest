import React, { useState, useEffect } from "react";
import { BiVolumeFull } from 'react-icons/bi';
import { BiVolumeMute } from 'react-icons/bi';
const useAudio = url => {
  const [audio] = useState(new Audio('/greenest-BGM.mp3'));
  const [playing, setPlaying] = useState(true);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div>
      <button onClick={toggle}>{playing ? <BiVolumeFull className="text-xl lg:text-2xl text-gray-600  animate-pulse" style={{'writing-mode': 'vertical-rl',
'text-orientation': 'sideways-right'}}/> : <BiVolumeMute className=" lg:text-xl text-base text-gray-600"/>}</button>
    </div>
  );
};

export default Player;