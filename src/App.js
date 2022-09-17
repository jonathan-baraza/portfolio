import "./App.css";
import "animate.css";
import { useEffect, useState, useRef } from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";
import AOS from "aos";
import MyTechStack from "./components/MyTechStack";
import MyProjects from "./components/MyProjects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import { ImPointUp } from "react-icons/im";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const scrollRef = useRef(null);
  const [showPointer, setShowPointer] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setShowPointer(true);
    } else {
      setShowPointer(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="main">
      <div className="cover">
        <Nav />
        <Banner />
        <AboutMe />
        <MyTechStack />
        <MyProjects />
        <ContactMe />
        <Footer />
        {showPointer && (
          <ImPointUp
            id="pointUp"
            className="text-light animate__animated animate__pulse animate__slow animate__infinite"
            size={25}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          />
        )}
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
