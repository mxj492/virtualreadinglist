import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return (
    <div
      style={{  clear: "both", paddingTop: 100, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
