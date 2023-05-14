import React from "react";
import Sidebar from "../components/layouts/sidebar/sidebar";
import NavigationBar from "../components/layouts/navigationBar/navigationBar";
import Headermusic from "../components/headermusic/header";

const Favorit = () => {
  return (
    <React.Fragment>
      <Sidebar />
      <div>
        <NavigationBar />
        <div
          className="h-screen"
          style={{
            background:
              "linear-gradient(172.17deg, #850101 6.33%, rgba(20, 20, 20, 0.82) 59.2%, rgba(38, 34, 34, 0) 91.81%)",
          }}
        >
          <Headermusic />
          <div className="ps-[100px]"></div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Favorit;
