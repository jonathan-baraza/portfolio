import IntroText from "./IntroText";

import lightDeveloper from "../assets/light_developer.gif";
import darkDeveloper from "../assets/lottie-developer-dark.json";
import Lottie from "react-lottie-player";
import reactIcon from "../assets/icons/react.svg";
import nodeIcon from "../assets/icons/node2.svg";
import reduxIcon from "../assets/icons/redux.svg";
import graphqlIcon from "../assets/icons/graphql.svg";

import { BsChevronDoubleDown } from "react-icons/bs";

function Banner() {
  return (
    <>
      <div
        className="row me-0 ms-0 banner d-flex justify-content-center align-items-center mt-3 p-3"
        style={{ position: "relative", maxHeight: "90vh", width: "100%" }}
      >
        <img
          src={reactIcon}
          alt="react-icon"
          className="rotate_icon"
          style={{ left: "20px", top: "10px" }}
        />
        <img
          src={nodeIcon}
          alt="node-icon"
          className="rotate_icon"
          style={{ right: "20px", top: "10px" }}
        />
        <img
          src={reduxIcon}
          alt="node-icon"
          className="rotate_icon"
          style={{ left: "20px", bottom: "10px" }}
        />
        <img
          src={graphqlIcon}
          alt="graphql-icon"
          className="rotate_icon"
          style={{ right: "20px", bottom: "10px" }}
        />

        <div className="col-sm-6 pb-3">
          <IntroText />
        </div>
        <div className="col-sm-4 pt-3">
          <Lottie
            loop
            animationData={darkDeveloper}
            play
            className="animate__animated animate__fadeInRight"
          />
        </div>
      </div>
      <div className="row w-100 d-flex justify-content-center p-2 m-0">
        <a href="#aboutDiv" className="downArrowContainer shadow">
          <BsChevronDoubleDown className="downArrow" size={25} />
        </a>
      </div>
    </>
  );
}

export default Banner;
