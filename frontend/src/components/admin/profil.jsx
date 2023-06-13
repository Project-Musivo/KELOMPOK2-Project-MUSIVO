import React, { useState } from "react";

  const Profil = () => {
    return (
      <div
      className="ms-[165px] " 
      >
     
      <div style={{ position: "relative", width: "screen", height: "345px" }}>
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          right: "0",

          borderRadius: "50%",
          backgroundImage: `url("./assets/logo.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "150px",
          border: "5px solid white"
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          right: "500px",
          backgroundColor: "none",
          padding: "120px",
          borderLeft: "5px solid white",
          borderBottom: "5px solid white",
          width: "600px",
        }}
      ></div>
    </div>
    </div>
      );
    };
export default Profil;
