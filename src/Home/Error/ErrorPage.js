import React from "react";
import errorimg from "./errorimg.jpg";
export const ErrorPage = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1 style={{ color: "red", justifyContent: "center", marginLeft: 10 }}>
        Please check Your URL
      </h1>
      <img src={errorimg} alt="logo" height={400} width={400} />
    </div>
  );
};
