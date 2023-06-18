import React, { useState } from "react";
import NavigationBar from "../components/layouts/navigationBar/navigationBar";
import Sidebaradmin from "../components/layouts/sidebar/sidebaradmin";
import Dasboardadmin from "./admin pages/dasboardadmin";

const Music = () => {

    return (
        <React.Fragment>
         <NavigationBar />
          <div>
          <Sidebaradmin />
            <div>
              <Dasboardadmin/>
            </div>
        </div>
        </React.Fragment>
      );
    };
export default Music;
