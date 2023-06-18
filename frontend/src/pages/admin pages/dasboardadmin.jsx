import React, { useState } from "react";
import Sidebar from "../../components/layouts/sidebar/sidebaradmin";
import Navbar from "../../admin components/navbardasboard";
import Card from "../../admin components/card";
import Profil from "../../admin components/profil";

  const Dasboardadmin = () => {
    return (
        <React.Fragment>
        <Sidebar />
      <div> 
          </div>
          <div>
          <Navbar />
          </div>
          <br /><br /><br />
          <Card />   
          <div>
          <Profil />
        </div>
        </React.Fragment>
      );
    };
export default Dasboardadmin;
