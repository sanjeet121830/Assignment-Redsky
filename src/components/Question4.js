import React from "react";
import Webcam from "react-webcam";
function Question4() {
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);
  const videoConstraints = {
    width: { min: 480 },
    height: { min: 720 },
    aspectRatio: 0.6666666667,
    
  };
  return (
    <div>
      <h2>Take a Picture from webcame:</h2>
      <Webcam
        audio={false}
        ref={webcamRef}
        videoConstraints={videoConstraints}
        screenshotFormat="image/jpeg"
      />
      <br />
      <button onClick={capture}>Capture photo</button>
      <br />
      {imgSrc && <img src={imgSrc} alt="webcame" />}
    </div>
  );
}

export default Question4;
