import React, { useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa6";
import pic1 from "../assets/Dil-Ibadat.jpg";
import pic2 from "../assets/pehale.jpg";
import pic3 from "../assets/Fearless.jpg";
import pic4 from "../assets/love_me.jpg";
import pic5 from "../assets/Tu_hi.jpg";
import { songs } from "./Card";
const Playlist = () => {
  const [image] = useState([pic1, pic2, pic3, pic4, pic5]);
  const [songPic] = useState([...songs, ...image]);
  const controlRef = useRef();
  const [play, setPlay] = useState(true);
  const playSong = (song) => {
    const curSong = (controlRef.current.src = song);
    controlRef.current.play();
    setPlay(false);
  };
  const pauseSong = (song) => {
    const curSong = (controlRef.current.src = song);
    controlRef.current.pause();
    setPlay(true);
  };
  return (
    <>
      {songs &&
        songs.map((song, i) => {
          const songName = song.split("/")[3];
          const img = image[i];
          if (i === 3) {
            return (
              <div
                key={i}
                className="col-span-2 h-48 w-full bg-emerald-400 rounded-md group"
              >
                <div className="mx-10 mt-2">{songName}</div>
                <div>
                  <div className="flex justify-center items-center">
                    <img src={img} width={"100px"} className="rounded-sm" />
                  </div>
                  <div className="hidden group-hover:flex justify-center items-center ">
                    {play ? (
                      <FaPlay
                        onClick={() => playSong(song)}
                        className="text-4xl"
                      />
                    ) : (
                      <FaPause
                        onClick={() => pauseSong(song)}
                        className="text-4xl"
                      />
                    )}
                    <audio src={song} ref={controlRef} />
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div
                key={i}
                className="h-48 w-full bg-emerald-400 rounded-md group "
              >
                <div className="mx-10 mt-2">{songName}</div>
                <div>
                  <div className="flex justify-center items-center">
                    <img
                      src={img}
                      alt=""
                      width={"100px"}
                      className="rounded-sm"
                    />
                  </div>
                  <div className="hidden group-hover:flex flex-col size-full justify-center items-center mt-3">
                    {play ? (
                      <FaPlay
                        onClick={() => playSong(song)}
                        className="text-4xl"
                      />
                    ) : (
                      <FaPause
                        onClick={() => pauseSong(song)}
                        className="text-4xl"
                      />
                    )}
                    <audio src={song} ref={controlRef} />
                  </div>
                </div>
              </div>
            );
          }
        })}
    </>
  );
};

export default Playlist;
