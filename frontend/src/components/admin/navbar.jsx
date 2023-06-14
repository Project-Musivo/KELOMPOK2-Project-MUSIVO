import React from "react";

const Navbar = () => {
  return (
    <nav 
    className="ms-[170px] " 
    style={{ borderLeft: "5px solid red"}}
    >
      <h1
      style={{fontSize: "20px", marginLeft: "30px", fontWeight: "bold" }}
      >Dashboard</h1>
    </nav>
  );
};

export default Navbar;
