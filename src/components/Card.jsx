import React, { useState, useRef, useEffect } from "react";
import pic1 from "../assets/pic1.jpg";
import Dil_Ibadat from "../assets/Dil_Ibadat.mp3";
import Pehale_Bhi_Main from "../assets/Pehale_Bhi_Mai.mp3";
import Fearless from "../assets/Fearless.mp3";
import Love_Me from "../assets/Love_Me.mp3";
import Tu_Hi from "../assets/Tu_Hi.mp3";
import {
  FaBackwardStep,
  FaForwardStep,
  FaPause,
  FaPlay,
} from "react-icons/fa6";
import {
  IoVolumeLowSharp,
  IoVolumeMedium,
  IoVolumeHighSharp,
  IoVolumeMute,
} from "react-icons/io5";
import Search from "./Search";
// import Playlist from "./Playlist";
export const songs = [Dil_Ibadat, Pehale_Bhi_Main, Fearless, Love_Me, Tu_Hi];
const Card = () => {
  const [index, setIndex] = useState(0);
  const [currentSong, setSongs] = useState(songs[index]);
  const [image, setImage] = useState([pic1]);
  const [play, setPlay] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [mute, setMute] = useState(false);
  const audioRef = useRef();
  const imgRef = useRef(image);
  // console.log(imgRef.current);
  const togglePlay = () => {
    audioRef.current.play();
    setPlay(false);
  };
  const togglePause = () => {
    audioRef.current.pause();
    setPlay(true);
  };
  const handleVolume = (e) => {
    const newVolume = e.target.value;
    // console.log(newVolume);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    // audioRef.current.mute = mute;
  };
  // console.log(volume);
  const handelNext = () => {
    setIndex((preIndex) => (preIndex === songs.length - 1 ? 0 : preIndex + 1));
    audioRef.current.src = songs[index];
    audioRef.current.play();
  };
  const handelBackward = () => {
    setIndex((preIndex) => (preIndex > 0 ? preIndex - 1 : 0));
    // console.log("next");
    // console.log(index);
    audioRef.current.src = songs[index];
    audioRef.current.play();
  };

  return (
    <>
      <div className="bg-emerald-300 w-full h-40 shadow-md rounded  flex flex-col items-center justify-between">
        {/* <Search /> */}
        <div>
          <img src={pic1} alt="" width={"70px"} className="rounded-lg" />
          <audio src={currentSong} ref={audioRef} muted={mute} />
        </div>
        <div className="flex justify-center items-center text-3xl gap-2 mb-10">
          <FaBackwardStep onClick={handelBackward} />
          {play ? (
            <FaPlay onClick={togglePlay} />
          ) : (
            <FaPause onClick={togglePause} />
          )}
          <FaForwardStep onClick={handelNext} />
          {volume <= 0 ? (
            <IoVolumeMute />
          ) : volume <= 0.25 ? (
            <IoVolumeLowSharp />
          ) : volume <= 0.5 ? (
            <IoVolumeMedium />
          ) : volume <= 0.75 ? (
            <IoVolumeHighSharp />
          ) : (
            <IoVolumeHighSharp />
          )}

          <input
            type="range"
            onChange={(e) => handleVolume(e)}
            min={0}
            max={1}
            step={0.01}
            value={volume}
          />
        </div>
      </div>
    </>
  );
};

export default Card;
