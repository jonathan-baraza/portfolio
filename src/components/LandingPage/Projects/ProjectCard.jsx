import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { AiOutlineGithub } from "react-icons/ai";
import { MdOutlineFolder } from "react-icons/md";
import { RiExternalLinkLine } from "react-icons/ri";
import { FaEye, FaCodeBranch, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <>
      <div className="col-sm-4 p-2">
        <div
          className=" ps-4 pe-4 pt-5 pb-3 rounded d-flex flex-column justify-content-between"
          id="projectCardDiv"
        >
          <div className="d-flex align-items-center justify-content-between">
            <MdOutlineFolder size={50} className="text-cornflowerblue" />
            <div className="d-flex ">
              <OverlayTrigger
                placement={"top"}
                overlay={
                  <Tooltip id={`tooltip`}>View project on github</Tooltip>
                }
              >
                <Link to={project.html_url} target="_blank">
                  <AiOutlineGithub
                    className=" hoverEffectDown me-2"
                    color={"#7d88a4"}
                    size={25}
                    style={{ cursor: "pointer" }}
                  />
                </Link>
              </OverlayTrigger>

              {project.homepage && (
                <OverlayTrigger
                  placement={"top"}
                  overlay={<Tooltip id={`tooltip`}>View Live Project</Tooltip>}
                >
                  <Link to={project.homepage} target="_blank">
                    <RiExternalLinkLine
                      className=" hoverEffectDown"
                      color={"#7d88a4"}
                      size={25}
                      style={{ cursor: "pointer" }}
                    />
                  </Link>
                </OverlayTrigger>
              )}
            </div>
          </div>
          <div
            className="fw-bold mt-3"
            style={{ color: "#ccd6f6", fontSize: "16px" }}
          >
            {project.name}
          </div>
          <div style={{ color: "#7d88a4", fontSize: "14px" }} className="mt-2">
            {project.description
              ? project.description.slice(0, 150)
              : "Checkout this project on github"}
          </div>
          <div
            className="w-100  d-flex justify-content-between  mt-3"
            style={{ color: "#7d88a4", fontSize: "12px" }}
          >
            <span className="d-flex align-items-center">
              <FaStar size={16} />
              <span className="ms-1">{project.stargazers_count}</span>
            </span>
            <span className="d-flex align-items-center">
              <FaCodeBranch size={16} />
              <span className="ms-1">{project.forks_count}</span>
            </span>
            <span className="d-flex align-items-center">
              <FaEye size={16} />
              <span className="ms-1">{project.watchers_count}</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
