import { useState, useEffect } from "react";
import helloWaveLight from "../assets/hello-wave-light.gif";
import helloWaveDark from "../assets/hello-wave-dark.json";
import Lottie from "react-lottie-player";
function IntroText() {
  let text1 = "I'm Jonathan...";
  let text2 = "A software engineer.";

  const [currentlyShowing, setCurrentlyShowing] = useState(true);
  const [displayText, setDisplayText] = useState("");
  const [textLength, setTextLength] = useState(text2.length);
  const [blinker, setBlinker] = useState("|");

  useEffect(() => {
    showText();
  }, [currentlyShowing]);

  const showText = () => {
    let iterateCount = 0;
    const myInterval = setInterval(() => {
      setDisplayText(
        currentlyShowing
          ? text1.substring(0, iterateCount)
          : text2.substring(0, iterateCount)
      );
      if (iterateCount >= textLength) {
        clearInterval(myInterval);
        setTimeout(() => {
          setCurrentlyShowing(!currentlyShowing);
        }, 1000);
      }
      iterateCount++;
    }, 100);
  };

  return (
    <div className="animate__animated animate__fadeInLeft">
      <h1 className="text-white mb-3 d-flex align-items-end introText">
        Hello there
        <Lottie
          loop
          play
          animationData={helloWaveDark}
          style={{
            width: "150px",
            height: "150px",
            marginBottom: "-15px",
          }}
        />
      </h1>
      <h1 className="text-white introText mb-3">
        {displayText}{" "}
        <span
          className="blinker"
          style={{ marginLeft: "10px", color: "yellow" }}
        >
          {blinker}
        </span>
      </h1>
      <a
        href="#contactDiv"
        className="mt-3 animate__animated animate__pulse animate__delay-5s animate__infinite animate__slow"
        id="btnLetsTalk"
      >
        Lets talk!
      </a>
    </div>
  );
}

export default IntroText;
