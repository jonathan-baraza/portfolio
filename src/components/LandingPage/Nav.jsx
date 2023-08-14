import { useState } from "react";
import resume from "../../assets/JonathanBarazaCV.pdf";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div
      className="m-0 p-0 "
      style={{ width: "100%", position: "absolute", top: "0", zIndex: "50000" }}
    >
      {" "}
      <nav
        id="nav"
        className="navbar me-0 ms-0 navbar-expand-lg shadow-lg animate__fadeInDown animate__animated"
      >
        <div className="container-fluid">
          <a
            className="navbar-brand nameTop"
            href="#"
            style={{ fontFamily: " 'Roboto', sans-serif", color: "#eaeaea" }}
          >
            <h4>
              <span className="blinker2" style={{ color: "yellow" }}>
                &lt;/&gt;
              </span>{" "}
              Jonathan Baraza
            </h4>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ zIndex: "30" }}
          >
            {!isMenuOpen ? (
              <AiOutlineMenu
                className="text-light"
                onClick={() => {
                  setIsMenuOpen(true);
                }}
              />
            ) : (
              <AiOutlineClose
                className="text-light"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              />
            )}
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
            // style={{
            //   position: "absolute",
            //   top: "10%",
            //   left: "0px",
            //   right: "0px",
            //   bottom: "0px",
            // }}
          >
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto p-3">
              <li className="nav-item m-1 me-2">
                <a href="#aboutDiv" className="nav_link">
                  <span className="text-cornflowerblue me-1">01.</span> About Me
                </a>
                <span className="nav_bottom_width"></span>
              </li>
              <li id="" className="nav-item m-1 me-2">
                <a href="#workExperience" className="nav_link">
                  <span className="text-cornflowerblue me-1">02.</span>
                  Experience
                </a>
                <span className="nav_bottom_width"></span>
              </li>
              <li className="nav-item m-1 me-2">
                <a href="#projects" className="nav_link">
                  <span className="text-cornflowerblue me-1">03.</span>Projects
                </a>
                <span className="nav_bottom_width"></span>
              </li>

              <li id="" className="nav-item m-1 me-2">
                <a href="#contactDiv" className="nav_link">
                  <span className="text-cornflowerblue me-1">04.</span>Contact
                </a>
                <span className="nav_bottom_width"></span>
              </li>
              <li id="re" className="nav-item m-1 btnResume">
                <a
                  href={resume}
                  target="_blank"
                  rel="noreferrer"
                  className="nav_link resumeBtn p-2"
                >
                  My Resume
                </a>
                <span className="nav_bottom_width"></span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
