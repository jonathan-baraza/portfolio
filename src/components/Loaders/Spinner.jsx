import React from "react";
import { ImSpinner9 } from "react-icons/im";
function Spinner({ message }) {
  return (
    <div id="spinnerDiv">
      <span>{message}</span>
      <ImSpinner9 id="spinnerIcon" size={30} />
    </div>
  );
}

export default Spinner;
