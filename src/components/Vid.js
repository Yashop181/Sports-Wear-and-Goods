import React, { useRef } from 'react';
import myvid1 from "../public/videos/desg.mp4"
import "../styles/Home.css";
const Vid = () => {
  // Create a ref to access the video element
  const videoRef = useRef(null);

  // Function to restart the video when it ends
  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;  // Set video playback time to the beginning
      videoRef.current.play();          // Start playing the video
    }
  };

  return (
    <div>
     
      <div className='top-video'>
      <video ref={videoRef} autoPlay muted onEnded={handleVideoEnd}>
        <source src={myvid1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>

    </div>
  );
}

export default Vid;
