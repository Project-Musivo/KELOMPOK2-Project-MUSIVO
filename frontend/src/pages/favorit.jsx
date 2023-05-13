// import { useState } from "react";
import Sidebar from "../components/layouts/sidebar/sidebar";
import NavigationBar from "../components/layouts/navigationBar.jsx/navigationBar";

const Favorit = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <NavigationBar />
        <h1>Test fav</h1>
      </div>
    </div>
  );
};
export default Favorit;
