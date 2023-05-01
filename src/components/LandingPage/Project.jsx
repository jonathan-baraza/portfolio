import { useState } from "react";
import Tilt from "react-parallax-tilt";

function Project({ name, image, text, link }) {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <>
      <Tilt
        className=" col-sm-3 p-0 "
        style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
      >
        <div className="card w-100 m-0 p-0 project-card">
          <div
            class="card-header p-0"
            style={{ position: "relative" }}
            onMouseOver={() => {
              // setShowOverlay(true);
            }}
            onMouseLeave={() => {
              // setShowOverlay(false);
            }}
          >
            {showOverlay && <span className="project-overlay">{name}</span>}
            <img src={image} class="w-100 mb-2 " alt="rick and morty" />
          </div>
          <div class="card-body d-flex align-items-center">
            <div class=" text-center">
              {text}
              <br />
              <a href={link} class="gitLink w-100 d-flex justify-content-end">
                {" "}
                {/* <button class="btn btn-outline-warning  mt-3">Check it out</button> */}
              </a>
            </div>{" "}
          </div>
        </div>
      </Tilt>
    </>
  );
}

export default Project;
