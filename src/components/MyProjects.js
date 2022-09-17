import { useState } from "react";

import TechsitePic from "../assets/assets/techsite1.png";
import RoyalSpaPic from "../assets/assets/royal_spa.PNG";
import RickAndMorty from "../assets/assets/rick_and_morty.jpg";
import TMSPic from "../assets/assets/tms.PNG";
import KQPic from "../assets/assets/kq.PNG";
import BoldManagePic from "../assets/assets/boldmanage.PNG";
import PigPic from "../assets/assets/pig.PNG";
import salonwarehousePic from "../assets/assets/salonwarehouse.PNG";
import portfolioPic from "../assets/assets/portfolio_pic.PNG";
import Project from "./Project";

function MyProjects() {
  const [projects, setProjects] = useState([
    {
      name: "Royal Spa",
      image: RoyalSpaPic,
      text: "This is a spa website showcasing the elegant style and services that a spa has to offer. It is built with HTML,CSS,Bootstrap,Vanilla Javascript and jquery.",
      link: "https://github.com/jonathan-baraza/royal-spa",
    },

    {
      name: "Rick and Morty App",
      image: RickAndMorty,
      text: "This is a web application that uses the Rick and Morty api to query characters from the famous cartoon Series. It is built with Nextjs and Bootstrap.",
      link: "https://github.com/jonathan-baraza/rickandmorty",
    },
    {
      name: "My portfolio",
      image: portfolioPic,
      text: "My portfolio project",
      link: "https://jonathan-baraza.github.io/portfolio/",
    },
    {
      name: "Techsite Mobile App",
      image: TechsitePic,
      text: "Techsite is an android application built with Java and firebase. It have features of a social appliation with the integration of a chatting, posting, liking,commenting, etc.",
      link: "https://github.com/jonathan-baraza/Techsitepro",
    },
    {
      name: "Tender Management System",
      image: TMSPic,
      text: "A web based online platform that allows the government to manage tenders by advertising, vetting applicants, awarding and notifying the applicants. Built with Laravel,Bootstrap,Javascript and mySql database.",
      link: "https://github.com/jonathan-baraza/Tendermanagementsystem",
    },
    {
      name: "Flights management system",
      image: KQPic,
      text: "A web based application that can be used by a flight company to manage flights as well as customers. It has the functionality to allow booking and changing flights etc. It has payment integration through MPESA.",
      link: "https://github.com/jonathan-baraza/flight_management_system",
    },
    {
      name: "Software Company Website",
      image: BoldManagePic,
      text: "A website for a software company to showcase their services. It is built using html, css and bootstrap.",
      link: "https://github.com/jonathan-baraza/boldmanage",
    },
    {
      name: "Pig farming website",
      image: PigPic,
      text: "A farmer's website where he sells farm products, mainly pigs and pig services. It is built with laravel bootstrap, javascript and mysql database.",
      link: "",
    },
    {
      name: "Salon company",
      image: salonwarehousePic,
      text: "A web application for a major salon, that showcases its services and the products that they sell. It is built with laravel, bootstrap, javascript and mysql database.",
      link: "",
    },
  ]);
  return (
    <div
      id="portfolioDiv"
      className="row mt-3 me-0 ms-0  text-white p-3"
      style={{ width: "100%" }}
    >
      <div className="col-sm-12 mt-5 mx-auto text-center" data-aos="zoom-in-up">
        <h3
          className="pb-2  border-bottom border-light mx-auto animate__fadeInUpBig animate__animated animate__slow"
          style={{ width: "fit-content" }}
        >
          My Projects &#129351;
        </h3>
      </div>
      <div className="col-sm-10 mt-4 d-flex  mx-auto justify-content-center row projectsHolder">
        {projects &&
          projects.map((project) => (
            <Project
              name={project.name}
              image={project.image}
              text={project.text}
              link={project.link}
            />
          ))}
      </div>
    </div>
  );
}

export default MyProjects;
