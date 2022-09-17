import { useState } from "react";
import resume from "../assets/JonathanBarazaCV.pdf";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="m-0 p-0 ">
      {" "}
      <nav
        style={{ width: "100%" }}
        id="nav"
        className="navbar me-0 ms-0 navbar-expand-lg shadow animate__fadeInDown animate__animated"
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto p-3">
              <li className="nav-item m-1">
                <a href="#aboutDiv" className="nav_link">
                  About
                </a>
                <span className="nav_bottom_width"></span>
              </li>
              <li className="nav-item m-1">
                <a href="#portfolioDiv" className="nav_link">
                  Portfolio
                </a>
                <span className="nav_bottom_width"></span>
              </li>
              <li id="" className="nav-item m-1">
                <a href="#contactDiv" className="nav_link">
                  Contact
                </a>
                <span className="nav_bottom_width"></span>
              </li>
              <li id="" className="nav-item m-1">
                <a
                  href={resume}
                  target="_blank"
                  rel="noreferrer"
                  className="nav_link resumeBtn p-2"
                >
                  Resume
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
