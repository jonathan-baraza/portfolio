import React from "react";
import Nav from "../components/LandingPage/Nav";
import Banner from "../components/LandingPage/Banner";
import ComputerCanvas from "../models/ComputerCanvas";
import { Canvas } from "@react-three/fiber";
import AboutMe from "../components/LandingPage/AboutMe";
import WorkExperience from "../components/LandingPage/WorkExperience";
import MyTechStack from "../components/LandingPage/MyTechStack";
import MyProjects from "../components/LandingPage/Projects/MyProjects";
import Footer from "../components/LandingPage/Footer";
import ContactMe from "../components/LandingPage/ContactMe";
function Home() {
  return (
    <>
      <div className="main">
        <div className="heroCover">
          <Nav />
          <Banner />
        </div>

        <AboutMe />
        <MyTechStack />
        <WorkExperience />
        <MyProjects />
        <ContactMe />
        <Footer />
      </div>
    </>
  );
}

export default Home;
