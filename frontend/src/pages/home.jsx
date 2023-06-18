import React, { useEffect } from "react";
import NavigationBar from "../components/layouts/navigationBar/navigationBar";
import Sidebar from "../components/layouts/sidebar/sidebaradmin";


const Home = () => {


  return (


    <React.Fragment>
      <Sidebar />
      <div>
        <NavigationBar />
       </div>
    
    </React.Fragment>

  );
};

export default Home;


