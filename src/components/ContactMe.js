import { useState } from "react";
import sendMessageAnimation from "../assets/sendMessageAnimation.json";
import Lottie from "react-lottie-player";
import { ImLocation } from "react-icons/im";
import { FaEnvelope } from "react-icons/fa";
import { GrSend } from "react-icons/gr";
import Spinner from "./Spinner";

//email js
import emailjs from "@emailjs/browser";

//toast
import { toast } from "react-toastify";

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
            toast.success("Message sent");
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
          <div
            className="col-sm-12 mt-5 mx-auto text-center"
            data-aos="zoom-in-up"
          >
            <h3
              className="pb-2 text-white  border-bottom border-light mx-auto animate__fadeInUpBig animate__animated animate__slow"
              style={{ width: "fit-content" }}
            >
              Contact me &#128231;
            </h3>
          </div>
          <div className="col-sm-6 ">
            <div className="d-flex align-items-center text-light">
              <Lottie
                loop
                animationData={sendMessageAnimation}
                play
                className="animate__animated animate__fadeInRight"
                style={{ height: "200px", width: "200px" }}
              />
              <span>
                <span className="d-flex align-items-center">
                  <small>
                    {" "}
                    <ImLocation className="me-2" /> Nairobi,KENYA
                  </small>
                </span>
                <span className="d-flex align-items-center">
                  <small>
                    {" "}
                    <FaEnvelope className="me-2" /> jbaraza46@gmail.com
                  </small>
                </span>
              </span>
            </div>
            <div className="d-flex justify-content-around ps-3 pe-3">
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
          <div className="col-sm-6 p-3 row  ms-0 me-0 align-items-center">
            <form
              id="contactForm"
              className="d-flex flex-column p-3 justify-content-center"
              onSubmit={handleSubmit}
            >
              <h5 className="mt-4 text-center text-white">
                Feel free to get in touch{" "}
              </h5>
              <input
                name="name"
                className="form-input mt-3 "
                type="text"
                placeholder="Name"
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
                placeholder="Email"
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
                placeholder="Phone Number"
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

              <button className="btnSubmit ms-auto">
                Send <GrSend />
              </button>
              {showSpinner && <Spinner message={spinnerMessage} />}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
