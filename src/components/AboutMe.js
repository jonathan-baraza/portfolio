import React from "react";
import androidIcon from "../assets/icons/android.svg";
import javaIcon from "../assets/icons/java.svg";
import tsIcon from "../assets/assets/ts.svg";
import firebaseIcon from "../assets/icons/firebase.svg";
function AboutMe() {
  return (
    <div
      id="aboutDiv"
      className="row me-0 ms-0 mt-5 pt-5 text-white pt-3 pb-5"
      style={{ width: "100%", position: "relative" }}
    >
      <div className="col-sm-8 mt-5 mx-auto text-center" data-aos="zoom-in-up">
        <img
          src={androidIcon}
          alt="android-icon"
          className="rotate_icon"
          style={{ left: "30%", top: "10px", width: "30px" }}
        />
        <img
          src={javaIcon}
          alt="java-icon"
          className="rotate_icon"
          style={{ right: "30%", top: "10px", width: "30px" }}
        />
        <img
          src={tsIcon}
          alt="android-icon"
          className="rotate_icon"
          style={{ left: "30px", bottom: "0px", width: "20px" }}
        />
        <img
          src={firebaseIcon}
          alt="java-icon"
          className="rotate_icon"
          style={{ right: "20px", bottom: "0px", width: "30px" }}
        />
        <h3
          className="pb-2 border-bottom border-light mx-auto animate__fadeInUpBig animate__animated animate__slow"
          style={{ width: "fit-content" }}
        >
          About me &#128526;
        </h3>
        <p
          className="mt-3 p-3 animate__fadeInUpBig animate__animated animate__slow"
          style={{ letterSpacing: "2px" }}
        >
          I am a knowledgeable and skilled software developer offering advanced
          abilities in wide range of programming languages, including Javascript
          (ReactJs, NodeJs,NextJs, Jquery),XML, Laravel(Php), Graphql,AWS, AI &
          ML ,Android development (Java),Database Systems (Mongo, Mysql,
          Firebase). Quickly understands requirements for new systems and
          creates robust code. Familiar with testing, debugging and correcting
          problems found in existing software systems.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
