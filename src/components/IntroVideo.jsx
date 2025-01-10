import React from "react";
import "./introVideo.css";

function IntroVideo() {
  return (
    <div className="topVideContainer">
      <div className="IntroVideoContainer">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/921VbEMAwwY?si=Vbbmss86wg3KH_Z7&amp;controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default IntroVideo;
