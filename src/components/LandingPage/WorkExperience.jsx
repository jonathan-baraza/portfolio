import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FcGraduationCap } from "react-icons/fc";
import Adanian from "../../assets/icons/Adanian.png";
import Techtenum from "../../assets/icons/Techtenum.png";
import HeroBg from "../../assets/backgroundImages/herobg.png";

function WorkExperience() {
  return (
    <>
      <div
        id="workExperience"
        className="row me-0 ms-0 mt-5 pt-5 text-white pt-3 pb-5"
        style={{
          width: "100%",
          position: "relative",
          backgroundImage: `url("${HeroBg}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="col-sm-10   d-flex justify-content-center mx-auto">
          <div id="projectsDiv2" className="col-sm-12 row ms-0 me-0 mt-4 ">
            <h2 className="pb-2  projects-header justify-content-center   m-0 d-flex align-items-center mt-3 mb-3  border-light  animate__fadeInUpBig animate__animated animate__slow">
              <span className="text-cornflowerblue me-2">02.</span>
              <span style={{ color: "#ccd6f6" }} className=" text-center">
                Work Experience 💼
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
        <div className="col-sm-10 mx-auto mt-5">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#f8f9fa",
                color: "#343a40",
                border: "1px solid #f8f9fa",
              }}
              contentArrowStyle={{
                borderRight: "7px solid #f8f9fa",
              }}
              dateClassName="text-cornflowerblue"
              date="2022 - present"
              iconStyle={{ color: "#fff", background: "#f8f9fa" }}
              icon={
                <div className="w-100 rounded-circle d-flex justify-content-center align-items-center h-100 bg-light">
                  <img
                    src={Adanian}
                    alt=""
                    className="d-block rounded-circle"
                    style={{
                      maxWidth: "100%",
                    }}
                  />
                </div>
              }
            >
              <h3 className="vertical-timeline-element-title">
                Software Engineer
              </h3>
              <h5
                className="vertical-timeline-element-subtitle"
                style={{ color: "#00f9bb" }}
              >
                Adanian Labs Global
              </h5>
              <p>
                Adanian Labs Africa, is a venture building studio with a mission
                to build tech powered impact driven startups across Africa.
                <br />
                skills learnt include Typescript, Docker,React Native, Mongo DB,
                Tailwind css, Bootstrap, AI etc...
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#f8f9fa",
                color: "#343a40",
                border: "1px solid #f8f9fa",
              }}
              contentArrowStyle={{
                borderRight: "7px solid #f8f9fa",
              }}
              date="Jan 2022- present"
              dateClassName="text-cornflowerblue"
              iconStyle={{ color: "#fff", background: "#f8f9fa" }}
              icon={
                <div className="w-100 rounded-circle d-flex justify-content-center align-items-center h-100 bg-light">
                  <img
                    src={Techtenum}
                    alt=""
                    className="d-block rounded-circle"
                    style={{
                      maxWidth: "100%",
                    }}
                  />
                </div>
              }
            >
              <h3 className="vertical-timeline-element-title">
                Software Engineer
              </h3>
              <h5
                className="vertical-timeline-element-subtitle"
                style={{ color: "#00f9bb" }}
              >
                Techtenum Minds Limited
              </h5>
              <p>
                Created an entire administrator application for Techtenum staff
                using Nextjs,AWS Storage,Graphql,NodeJs etc..
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#f8f9fa",
                color: "#343a40",
                border: "1px solid #f8f9fa",
              }}
              contentArrowStyle={{
                borderRight: "7px solid #f8f9fa",
              }}
              date="June 2021-December 2021"
              dateClassName="text-cornflowerblue"
              iconStyle={{ color: "#fff", background: "#f8f9fa" }}
              icon={
                <div className="w-100 rounded-circle d-flex justify-content-center align-items-center h-100 bg-light">
                  <img
                    src={Techtenum}
                    alt=""
                    className="d-block rounded-circle"
                    style={{
                      maxWidth: "100%",
                    }}
                  />
                </div>
              }
            >
              <h3 className="vertical-timeline-element-title">
                Software Engineer Intern
              </h3>
              <h5
                className="vertical-timeline-element-subtitle"
                style={{ color: "#00f9bb" }}
              >
                Techtenum Minds Limited
              </h5>
              <p className="w-full">
                Techtenum Minds is an education-driven start-up that is working
                towards creating a technology and innovation culture and way of
                thinking that promotes the local development of consumer tech
                products.
                <br />
                <br />I created web applications using
                Nexjs(Reactjs),Nodejs,AWS,Graphql,
                <br />
                Chartjs,SASS etc...
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
}

export default WorkExperience;
