import { useState, useEffect } from "react";
import helloWaveDark from "../../assets/animations/hello-wave-dark.json";
import Lottie from "react-lottie-player";

function IntroText() {
  let text1 = "I'm a Fullstack Engineer.";
  let text2 = "Mobile Apps Engineer.";

  const [currentlyShowing, setCurrentlyShowing] = useState(true);
  const [displayText, setDisplayText] = useState("");
  const [textLength, setTextLength] = useState(text1.length);
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
    <div className="animate__animated animate__fadeInLeft position-relative">
      <h1
        id="introHeading"
        style={{ color: "#64ffda", fontSize: "65px" }}
        className=" w-100  mb-3 d-flex align-items-end introText fw-bolder"
      >
        Hello there...
        <Lottie
          loop
          play
          animationData={helloWaveDark}
          style={{
            width: "200px",
            height: "200px",
            marginBottom: "-15px",
          }}
          itemID="lottieWave"
        />
      </h1>
      <h1 style={{ color: "#ccd6f6" }} className="introText mb-3 fw-bolder">
        {displayText}
        <span
          className="blinker"
          style={{ marginLeft: "10px", color: "#64ffda" }}
        >
          {blinker}
        </span>
      </h1>
      <br />
      <a
        id="btnLetsTalk"
        href="#contactDiv"
        className="mt-5 animate__animated animate__pulse animate__delay-5s animate__infinite animate__slow rounded fw-bold"
      >
        Lets talk!
      </a>
    </div>
  );
}

export default IntroText;
