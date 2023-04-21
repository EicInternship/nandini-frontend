import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const footerHeight = 100;
const footerEltMarginTop = 15;

const div1Style = {
  width: "100vw",
  height: "75px",
  backgroundColor: "black",
  position: "fixed",
  bottom: 0,
};

const div2Style = {
  width: "100%",
  position: "fixed",
  color: "white",
  height: `${footerHeight}px`,
  marginTop: `${footerEltMarginTop}px`,
  bottom: -11,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const iconContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
  borderRadius: "50%",
  width: "45px",
  height: "45px",
  margin: "0 20px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};

const iconStyle = {
  fontSize: "30px",
  color: "black",
};

const iconHoverStyle = {
  backgroundColor: "orange",
};

export default function Footer() {
  return (
    <div style={{ width: "100%" }}>
      <div style={div1Style}></div>
      <div style={div2Style}>
        <div style={{ display: "flex" }}>
          <div style={{ ...iconContainerStyle, ...iconHoverStyle }}>
            <FontAwesomeIcon icon={faTelegram} style={iconStyle} />
          </div>
          <div style={{ ...iconContainerStyle, ...iconHoverStyle }}>
            <FontAwesomeIcon icon={faInstagram} style={iconStyle} />
          </div>
          <div style={{ ...iconContainerStyle, ...iconHoverStyle }}>
            <FontAwesomeIcon icon={faTwitter} style={iconStyle} />
          </div>
          <div style={{ ...iconContainerStyle, ...iconHoverStyle }}>
            <FontAwesomeIcon icon={faLinkedin} style={iconStyle} />
          </div>
        </div>
      </div>
    </div>
  );
}
