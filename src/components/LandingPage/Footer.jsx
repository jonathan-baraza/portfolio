import React from "react";
import { MdOutlineLocalPolice } from "react-icons/md";
function Footer() {
  return (
    <div
      id="footer"
      className="w-100 pb-3 pt-5 d-flex justify-content-center align-items-center"
    >
      <p className="mt-2 text-light text-center">
        <span className="text-cornflowerblue ms-1 me-1"> Jonathan Baraza</span>{" "}
        &copy;
        <span className="text-cornflowerblue ms-1 me-1">
          {new Date(Date.now()).getFullYear()}
        </span>{" "}
        | All Rights Reserved{" "}
        <MdOutlineLocalPolice className="text-cornflowerblue" size={25} />
      </p>
    </div>
  );
}

export default Footer;
