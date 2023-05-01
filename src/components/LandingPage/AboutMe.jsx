import React from "react";
import androidIcon from "../../assets/icons/android.svg";
import javaIcon from "../../assets/icons/java.svg";
import tsIcon from "../../assets/icons/ts.svg";
import firebaseIcon from "../../assets/icons/firebase.svg";
import ComputerCanvas from "../../models/ComputerCanvas";

function AboutMe() {
  return (
    <div
      id="aboutDiv"
      className="row me-0 ms-0 mt-5 pt-5 text-white pt-3 "
      style={{ width: "100%", position: "relative" }}
    >
      <div className="row m-0 mx-auto col-sm-12  p-0">
        <div
          className="col-sm-5 m mt-5  p-3 ps-lg-4 ms-auto text-start"
          // data-aos="zoom-in-up"
        >
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
            style={{ left: "30px", bottom: "30px", width: "20px" }}
          />
          <img
            src={firebaseIcon}
            alt="java-icon"
            className="rotate_icon"
            style={{ right: "20px", bottom: "30px", width: "30px" }}
          />

          <div
            className="mt-3 p-3  animate__fadeInUpBig animate__animated animate__slow text-start"
            style={{ fontSize: "18px", color: "#ccd6f6" }}
          >
            <h2 className="pb-2   m-0 d-flex align-items-center mt-3 mb-3  border-light  animate__fadeInUpBig animate__animated animate__slow">
              <span className="text-cornflowerblue me-2">01.</span>
              <span style={{ color: "#ccd6f6" }} className=" text-center">
                About Me 🤓
              </span>
              <span
                style={{
                  backgroundColor: "#8791af",
                  color: "#8791af",
                  height: "1px",
                }}
                className="w-25 ms-2"
              ></span>
            </h2>
            <span className="" style={{ color: "#7d88a4" }}>
              <span>
                I am a{" "}
                <span className="text-cornflowerblue ms-1 me-1">
                  software engineer
                </span>{" "}
                with over{" "}
                <span className="text-cornflowerblue ms-1 me-1">
                  three years
                </span>{" "}
                of experience building software solutions using a{" "}
                <span className="text-cornflowerblue ms-1 me-1">variety</span>{" "}
                of programming languages. I have a strong focus on building{" "}
                <span className="text-cornflowerblue ms-1 me-1">
                  scalable, efficient, and maintainable
                </span>{" "}
                applications that deliver real value to users. I am also a{" "}
                <span className="text-cornflowerblue ms-1 me-1">
                  self-starter
                </span>
                , able to work independently and take ownership of projects from
                start to finish. I am constantly learning and staying up-to-date
                with the latest industry trends and{" "}
                <span className="text-cornflowerblue ms-1 me-1">
                  best practices
                </span>
                , and I strive to continuously{" "}
                <span className="text-cornflowerblue ms-1 me-1">
                  improve my skills and knowledge
                </span>
                to deliver the{" "}
                <span className="text-cornflowerblue ms-1 me-1">best</span>{" "}
                possible results.
              </span>
            </span>
          </div>
        </div>
        <div className="col-sm-6 p-3 ">
          <ComputerCanvas />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
