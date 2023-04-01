import React, { useRef, useState } from "react";
import coffee from "../video/coffee.mp4";
import VideoFooter from "./components/footer/VideoFooter";
import "./video.css";


function Video() {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handdleStart() {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handdleStart}
        autoPlay
        loop
        src={coffee}
      ></video>
      {/*Side bar */}

      
      {/*Footer */}
      <VideoFooter />

    </div>
  );
}

export default Video;
