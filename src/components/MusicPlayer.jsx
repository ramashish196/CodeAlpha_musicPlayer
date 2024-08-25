import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import song from "../assets/Dil_Ibadat.mp3";
import SpotifyWebPlayer from "react-spotify-web-playback";
import {
  FaBackwardStep,
  FaForwardStep,
  FaPause,
  FaPlay,
} from "react-icons/fa6";
// import { clientApi, setClientToken } from "./musicApi";
const MusicPlayer = () => {
  // from api
  const [songs, setSongs] = useState([]);
  const [token, setToken] = useState("");
  const [play, setPlay] = useState(true);
  const audioPlayer = useRef();

  // useEffect(() => {
  //   const hash = window.location.hash;
  //   const _token = hash?.split("=")[1]?.split("&")[0];
  //   window.localStorage.setItem("token", _token);
  //   setToken(_token);
  // }, []);
  // console.log(token);
  // useEffect(() => {
  //   const fetch = async () => {
  //     console.log(token);
  //     const res = await axios.get("https://api.spotify.com/v1/me/playlists", {
  //       headers: {
  //         Authorization: "Beare " + token,
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     console.log(res);
  //   };
  //   fetch();
  // }, []);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://spotify23.p.rapidapi.com/search/",
      params: {
        q: "albums artists episodes genres playlists tracks users",
        type: "multi",
        offset: "0",
        limit: "10",
        numberOfTopResults: "5",
      },
      headers: {
        "x-rapidapi-key": "4573b4b217msha4c667d20181666p1c4bb5jsn1610f7c72ad0",
        "x-rapidapi-host": "spotify23.p.rapidapi.com",
      },
    };
    const data = async () => {
      try {
        const response = await axios.request(options);
        console.log(response.data);
        setSongs(response.data.tracks.items[0].data.uri);
        setToken(response.data.tracks.items[0].data.id);
      } catch (error) {
        console.error(error);
      }
    };
    data();
  }, []);

  console.log(token);
  const togglePlay = () => {
    console.log("paly:", audioPlayer.current);
    audioPlayer.current.play();
    setPlay(false);
  };
  const togglePause = () => {
    console.log("pause:", audioPlayer.current);
    audioPlayer.current.pause();
    setPlay(true);
  };
  return (
    <>
      <h3>play</h3>
      {/* <audio src={songs} ref={audioPlayer}></audio> */}
      <SpotifyWebPlayer uris={songs} token={token} />
      <div className=" flex justify-center items-center gap-4 text-xl w-[400px] h-[40px] shadow-md bg-white rounded m-auto">
        <FaBackwardStep />
        {play ? (
          <FaPlay onClick={togglePlay} />
        ) : (
          <FaPause onClick={togglePause} />
        )}

        <FaForwardStep />
      </div>
    </>
  );
};

export default MusicPlayer;
