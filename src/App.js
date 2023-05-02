import "./App.css";
import "animate.css";
import { useEffect, useState, useRef } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ImPointUp } from "react-icons/im";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";

import PageNotFound from "./pages/PageNotFound";

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
    <>
      <Router>
        <Routes>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      {showPointer && (
        <ImPointUp
          id="pointUp"
          className="text-light animate__animated animate__pulse animate__slow animate__infinite"
          size={25}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          style={{ zIndex: "1000000" }}
        />
      )}

      <ToastContainer />
    </>
  );
}

export default App;
