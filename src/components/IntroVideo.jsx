import React from "react";
import "./introVideo.css";

function IntroVideo() {
  return (
    <div className="topVideContainer">
      <div className="IntroVideoContainer">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Ann_XMs-gfc?controls=0&modestbranding=1&rel=0&showinfo=0?modestbranding=1"
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
