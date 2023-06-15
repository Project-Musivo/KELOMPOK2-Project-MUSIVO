import React, { useState } from "react";
import NavigationBaradmin from "../components/layouts/navigationBar/navigationBaradmin";
import Sidebaradmin from "../components/layouts/sidebar/sidebaradmin";
import Navbar from "../components/admin/navbar";
import Card from "../components/admin/card";
import Profil from "../components/admin/profil";

  const Dasboardadmin = () => {
    return (
        <React.Fragment>
        <NavigationBaradmin />
          <div>
          <Sidebaradmin />
          </div>
          <div>
          <Navbar />
          </div>
          <Card />   
          <div>
          <Profil />
        </div>
        </React.Fragment>
      );
    };
export default Dasboardadmin;
