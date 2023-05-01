import { useState, useEffect } from "react";

import Tilt from "react-parallax-tilt";

import Moh_banner from "../../../assets/images/moha_banner.png";
import Techtenum_banner from "../../../assets/images/techtenum_login.png";
import { RiExternalLinkLine } from "react-icons/ri";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import axios from "axios";
import { ImSpinner2 } from "react-icons/im";

function MyProjects() {
  const [loading, setLoading] = useState(true);
  const [isFiltered, setIsFiltered] = useState(false);

  const [projects, setProjects] = useState([]);
  const [projectsCount, setProjectsCount] = useState(9);

  const fetchProjects = async () => {
    const projectsData = await axios.get(
      "https://api.github.com/users/jonathan-baraza/repos"
    );

    console.log("projects data");
    console.log(projectsData.data);
    setProjects(projectsData.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setProjectsCount(projectsCount + 9);
    }, 2000);
  };

  return (
    <div
      id="projects"
      className="row mt-3 me-0 ms-0  text-white p-3"
      style={{ width: "100%" }}
    >
      <div
        id="projectsDiv"
        className="col-sm-10 row mx-auto m-0"
        data-aos="zoom-in-up"
      >
        <div
          id="projectsDiv1"
          className="col-sm-12 mt-5 mx-auto text-center"
          data-aos="zoom-in-up"
        >
          <div id="projectsDiv2" className="col-sm-12 row ms-0 me-0 mt-4 ">
            <h2 className="pb-2  projects-header   m-0 d-flex align-items-center mt-3 mb-3  border-light  animate__fadeInUpBig animate__animated animate__slow">
              <span className="text-cornflowerblue me-2">03.</span>
              <span style={{ color: "#ccd6f6" }} className=" text-center">
                Some Things I have built{" "}
                <span className="hideSmall">&#129351;</span>
              </span>
              <span
                style={{
                  backgroundColor: "#8791af",
                  color: "#8791af",
                  height: "1px",
                }}
                className="h-line w-25 ms-2"
              ></span>
            </h2>
          </div>
        </div>
        {/* Maids of Honour Africa */}
        <div
          className="col-sm-12 mt-4 mb-5  row m-0"
          style={{ position: "relative" }}
        >
          <Tilt
            className="prodProjectDiv col-sm-6 pt-3 pb-0 ps-3 pe-3 rounded d-flex flex-column align-items-center"
            style={{
              height: "400px",
              backgroundColor: "#2e3a52",
              position: "relative",
            }}
            onEnter={() => {
              // setIsFiltered(false);
            }}
            onLeave={() => {
              // setIsFiltered(true);
            }}
          >
            <h4 className=" m-2" style={{ color: "#64ffda" }}>
              Maids of Honour Africa
            </h4>
            <span className="m-3 w-75 mx-auto proj-desc-sm">
              <small>
                A web platform that digitalizes the informal working sector...
              </small>
            </span>
            <img
              src={Moh_banner}
              alt=""
              style={{ filter: isFiltered ? "grayscale(70%)" : "none" }}
              className="w-100 mt-3 mb-0 projPic"
            />
            {isFiltered && (
              <div
                className="overlay"
                style={{
                  position: "absolute",
                  left: "0",
                  right: "0",
                  top: "0",
                  bottom: "0",
                  backgroundColor: "rgb(35,67,93)",
                  opacity: "30%",
                }}
              ></div>
            )}
          </Tilt>
          <div className="col-sm-6 proj-details  d-flex flex-column align-items-end">
            <span className="text-cornflowerblue mt-3">Featured Project</span>
            <h4 className=" mt-2">Maids of Honour Web Platform</h4>
            <div
              style={{
                backgroundColor: "#112240",
                color: "#7d88a4",
                zIndex: 3,
                width: "109%",
              }}
              className="p-3 proj-details-div rounded mt-4 text-end"
            >
              A web application that
              <span className="text-cornflowerblue ms-1 me-1">digitalizes</span>
              the informal sector.
              <span className="text-cornflowerblue ms-1 me-1">Clients</span> and
              <span className="text-cornflowerblue ms-1 me-1">
                service providers
              </span>
              can
              <span className="text-cornflowerblue ms-1 me-1">
                create accounts
              </span>
              on the platform,
              <span className="text-cornflowerblue ms-1 me-1">
                perform booking, rate services, and make payments securely.
              </span>
              The platform offers a streamlined experience for managing
              appointments, communication,contracts and payments.
            </div>

            <div
              className="w-100  d-flex flex-wrap  mt-3"
              style={{ color: "#7d88a4" }}
            >
              <span className="me-1">React</span>
              <span className="me-1"> NodeJS</span>
              <span className="me-1"> React Native</span>
              <span className="me-1"> Bootstrap</span>
              <span className="me-1"> AWS</span>
              <span className="me-1"> VS Code</span>
            </div>
            <div className="d-flex align-items-center justify-content-end mt-3">
              <span className="viewProjectBtn p-2  mt-2 ms-3  rounded me-4">
                View Project
              </span>

              <OverlayTrigger
                placement={"top"}
                overlay={<Tooltip id={`tooltip`}>View Live Project</Tooltip>}
              >
                <Link to={"https://maidsofhonour.africa"} target="_blank">
                  <RiExternalLinkLine
                    className="text-cornflowerblue hoverEffectDown"
                    size={30}
                    style={{ cursor: "pointer" }}
                  />
                </Link>
              </OverlayTrigger>
            </div>
          </div>
        </div>
        {/* Techtenum Minds Limited */}
        <div
          id="tenumProject"
          className=" col-sm-12 mt-5 pt-5  row m-0"
          style={{ position: "relative" }}
        >
          <div className="col-sm-6 proj-details  d-flex flex-column align-items-start">
            <span className="text-cornflowerblue mt-3">Featured Project</span>
            <h4 className=" mt-2">Techtenum Minds Limited</h4>
            <div
              style={{
                backgroundColor: "#112240",
                color: "#7d88a4",
                zIndex: 3,
                width: "112%",
              }}
              className="p-3 proj-details-div rounded mt-4 text-start"
            >
              An <span className="text-cornflowerblue ms-1 me-1">EduTech</span>{" "}
              platform that offers
              <span className="text-cornflowerblue ms-1 me-1">
                software development courses
              </span>
              and tests. Learners earn
              <span className="text-cornflowerblue ms-1 me-1">
                badges and certificates
              </span>
              while being guided by instructors who provide feedback on their
              progress. The platform's engaging approach equips learners with
              the
              <span className="text-cornflowerblue ms-1 me-1">
                knowledge and skills
              </span>
              needed to succeed in software development.
            </div>

            <div
              className="w-100  d-flex flex-wrap  mt-3"
              style={{ color: "#7d88a4" }}
            >
              <span className="me-1">NextJS</span>
              <span className="me-1">GraphQl</span>
              <span className="me-1"> NodeJS</span>
              <span className="me-1"> SASS</span>
              <span className="me-1"> AWS</span>
              <span className="me-1"> VS Code</span>
            </div>
            <div className="d-flex align-items-center justify-content-end mt-3">
              <span className="viewProjectBtn p-2  mt-2 ms-3  rounded me-4">
                View Project
              </span>

              <OverlayTrigger
                placement={"top"}
                overlay={<Tooltip id={`tooltip`}>View Live Project</Tooltip>}
              >
                <Link to={"https://edu.techtenum.com"} target="_blank">
                  <RiExternalLinkLine
                    className="text-cornflowerblue hoverEffectDown"
                    size={30}
                    style={{ cursor: "pointer" }}
                  />
                </Link>
              </OverlayTrigger>
            </div>
          </div>
          <Tilt
            className="prodProjectDiv col-sm-6 pt-3 pb-0 ps-3 pe-3 rounded d-flex flex-column align-items-center"
            style={{
              height: "400px",
              backgroundColor: "#2e3a52",
              position: "relative",
            }}
            onEnter={() => {
              // setIsFiltered(false);
            }}
            onLeave={() => {
              // setIsFiltered(true);
            }}
          >
            <h4 className=" m-3" style={{ color: "#64ffda" }}>
              Techtenum Minds Limited
            </h4>
            <span className="m-2 w-75 proj-desc-sm mx-auto">
              <small>
                An EduTech web platform that allows learners to learn about
                software development.
              </small>
            </span>
            <img
              src={Techtenum_banner}
              alt=""
              style={{ filter: isFiltered ? "grayscale(70%)" : "none" }}
              className="w-100 mt-3 mb-0 projPic"
            />
            {isFiltered && (
              <div
                className="overlay"
                style={{
                  position: "absolute",
                  left: "0",
                  right: "0",
                  top: "0",
                  bottom: "0",
                  backgroundColor: "rgb(35,67,93)",
                  opacity: "30%",
                }}
              ></div>
            )}
          </Tilt>
        </div>
        <div
          id="projectsDiv1"
          className="col-sm-12 mt-5 pt-5 mx-auto text-center"
          data-aos="zoom-in-up"
        >
          <div id="projectsDiv2" className="col-sm-12 row ms-0 me-0 mt-4 ">
            <h2 className="pb-2  projects-header mx-auto text-center justify-content-center  m-0 d-flex align-items-center mt-3 mb-3  border-light  animate__fadeInUpBig animate__animated animate__slow">
              <span
                style={{ color: "#ccd6f6" }}
                className=" ms-2 me-1 text-center"
              >
                Some of my other projects
              </span>
            </h2>
            <center>
              <span className="text-cornflowerblue ">
                <small>
                  <u>Feel free to star the repos</u>
                </small>
              </span>
            </center>
          </div>
        </div>
        <div className="mx-auto col-sm-12 row ms-0 me-0 mb-4 mt-5">
          {projects.length > 0 &&
            projects
              .slice(0, projectsCount)
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          {loading && (
            <>
              <div
                className="mx-auto col-sm-6 text-center"
                style={{ color: "#64ffda" }}
              >
                <ImSpinner2 id="spinnerIcon" size={25} color={"#64ffda"} />
              </div>
            </>
          )}

          {projects.length > projectsCount && !loading && (
            <button
              id="btnLoadMore"
              className="rounded mt-3"
              onClick={handleLoadMore}
            >
              Load more
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyProjects;
