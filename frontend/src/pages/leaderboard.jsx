import React, { useState } from "react";
import NavigationBar from "../components/layouts/navigationBar/navigationBar";
import Sidebar from "../components/layouts/sidebar/sidebar";

  const Leaderboard = () => {
    return (
        <React.Fragment>
        <Sidebar />
          <div>
            <NavigationBar />
            <div className="h-screen">
                
            </div>
        </div>
        </React.Fragment>
      );
    };
export default Leaderboard;
