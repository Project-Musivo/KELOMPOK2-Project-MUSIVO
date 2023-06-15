import React, { useState } from "react";
import Sidebar from "../layouts/sidebar/sidebar";
import NavigationBar from "../layouts/navigationBar/navigationBar";

const Favorit = () => {
  return (
    <React.Fragment>
      <Sidebar />
      <div>
        <NavigationBar />
      </div>
    </React.Fragment>
  );
};
export default Favorit;
