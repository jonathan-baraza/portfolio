import { useState } from "react";
import sendMessageAnimation from "../../assets/animations/sendMessageAnimation.json";
import Lottie from "react-lottie-player";
import { ImLocation } from "react-icons/im";
import { FaEnvelope } from "react-icons/fa";
import { GrSend } from "react-icons/gr";
import Spinner from "../Loaders/Spinner";

//email js
import emailjs from "@emailjs/browser";

//toast
import { toast } from "react-toastify";
import Tilt from "react-parallax-tilt";

function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  const [spinnerMessage, setSpinnerMessage] = useState("Sending message");

  const emailContent = {
    recipientName: "Jonathan Baraza",
    senderName: name,
    senderEmail: email,
    message: message,
    senderPhone: phone,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSpinner(true);
    emailjs
      .send(
        "service_e0nqmvn",
        "template_f8zjfir",
        emailContent,
        "AP8bJukXwHqcS7TcC"
      )
      .then(
        (result) => {
          setShowSpinner(false);
          if (result.text === "OK") {
            toast.success("Message sent, I will get back to you shortly.");
          } else {
            toast.error("Failed to send message");
          }
        },
        (error) => {
          setShowSpinner(false);
          toast.success("Could not send message, try again later.");
          console.log(error.text);
        }
      );
    resetInputs();
  };

  const resetInputs = () => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="contactRow" id="contactDiv">
      <div className="contactCover  d-flex justify-content-center row ms-0 me-0">
        <div className="row col-sm-10 mx-auto mt-5 me-0 ms-0 p-3 ">
          <div className="row m-0 mt-3 p-0 col-sm-12 mx-auto d-flex justify-content-center ">
            <div className="col-sm-12 mx-auto row m-0">
              <h2 className="pb-2   m-0 d-flex align-items-center mt-3 mb-3  border-light  animate__fadeInUpBig animate__animated animate__slow col-sm-12 mx-auto text-center justify-content-center">
                <span
                  style={{
                    backgroundColor: "#8791af",
                    color: "#8791af",
                    height: "1px",
                  }}
                  className="w-25 me-2 hideSmall"
                ></span>
                <span className="text-cornflowerblue me-2">04.</span>
                <span style={{ color: "#ccd6f6" }} className=" text-center">
                  Contact me &#128231;
                </span>
                <span
                  style={{
                    backgroundColor: "#8791af",
                    color: "#8791af",
                    height: "1px",
                  }}
                  className="w-25 ms-2 hideSmall"
                ></span>
              </h2>

              <div className="row w-full col-sm-10 mx-auto m-0 d-flex align-items-center text-light mb-2 pb-3  mt-3">
                <Lottie
                  loop
                  animationData={sendMessageAnimation}
                  play
                  className="animate__animated animate__fadeInRight col-sm-4"
                  // style={{ height: "200px", width: "200px" }}
                />
                <span className="col-sm-8 mt-2">
                  <div className="mt2 mb-2 text-end contactText">
                    Thank you for visiting my{" "}
                    <span className="text-cornflowerblue ms-1 me-1">
                      portfolio!
                    </span>{" "}
                    If you have any questions, comments, or would like to
                    discuss a{" "}
                    <span className="text-cornflowerblue ms-1 me-1">
                      potential project
                    </span>
                    , please don't hesitate to get in touch. I'm always happy to
                    chat with other developers, entrepreneurs, and businesses
                    who are interested in building{" "}
                    <span className="text-cornflowerblue ms-1 me-1">
                      innovative software solutions.
                    </span>{" "}
                    You can contact me using the form on this page or by
                    emailing me directly at{" "}
                    <span className="text-cornflowerblue ms-1 me-1">
                      <a
                        href={`mailto:jbaraza46@gmail.com`}
                        className="text-cornflowerblue"
                        style={{ cursor: "pointer" }}
                      >
                        jbaraza46@gmail.com
                      </a>
                    </span>
                    . I'll do my best to respond to your message{" "}
                    <span className="text-cornflowerblue ms-1 me-1">
                      as soon as possible{" "}
                    </span>
                    . Looking forward to hearing from you!
                  </div>
                </span>
              </div>
              <div className="d-flex justify-content-around ps-3 pe-3 mt-4 mb-4  col-sm-6 mx-auto">
                <a
                  href="tel:+254704783187"
                  className="d-flex align-items-center justify-content-center bi bi-telephone media-icons rounded-circle p-2"
                ></a>
                <a
                  href="https://www.facebook.com/jonathan.baraza.3/"
                  className="d-flex align-items-center justify-content-center bi bi-facebook media-icons rounded-circle p-2"
                ></a>
                <a
                  href="https://wa.me/+254704783187"
                  className="d-flex align-items-center justify-content-center bi bi-whatsapp media-icons rounded-circle p-2"
                ></a>

                <a
                  href="https://www.instagram.com/_jonathan_baraza/"
                  className="d-flex align-items-center justify-content-center bi bi-instagram media-icons rounded-circle p-2"
                ></a>
                <a
                  href="https://twitter.com/jonathan_baraza"
                  className="d-flex align-items-center justify-content-center bi bi-twitter media-icons rounded-circle p-2"
                ></a>
                <i class="d-flex align-items-center justify-content-center bi bi-tiktok media-icons rounded-circle p-2"></i>
                <a
                  href="https://telegram.me/jonathan_baraza"
                  className="d-flex align-items-center justify-content-center bi bi-telegram media-icons rounded-circle p-2"
                ></a>
              </div>
            </div>
          </div>
          <div className="row m-0 p-0 col-sm-12 mx-auto d-flex justify-content-center mt-3">
            <div className="col-sm-6  p-3 row contactDiv   ms-0 me-0 align-items-center">
              {/* <Tilt className="p-0 m-0"> */}
              <form
                id="contactForm"
                className="d-flex flex-column p-3 justify-content-center"
                onSubmit={handleSubmit}
              >
                <h4 className="mt-4 text-center text-cornflowerblue ">
                  Feel free to get in touch
                </h4>
                <input
                  name="name"
                  className="form-input mt-3 "
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required
                />

                <input
                  name="email"
                  className="form-input  mt-1 "
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
                <input
                  name="phone"
                  className="form-input  mt-1 "
                  type="number"
                  placeholder="Your Phone Number"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  required
                />

                <textarea
                  name="message"
                  className="form-input pt-1"
                  placeholder="...Type message here..."
                  rows={2}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  required
                ></textarea>

                <button className="btnSubmit ms-auto mt-2">Send</button>
                {showSpinner && <Spinner message={spinnerMessage} />}
              </form>
              {/* </Tilt> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
