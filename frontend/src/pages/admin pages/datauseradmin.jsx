import React, { useState } from "react";
import NavigationBar from "../../components/layouts/navigationBar/navigationBar";
import Sidebaradmin from "../../components/layouts/sidebar/sidebaradmin";


  const DataUser = () => {
    return (
        <React.Fragment>
        <NavigationBar />
          <div>
          <Sidebaradmin />
            <div>

            </div>
        </div>
        </React.Fragment>
      );
    };
export default DataUser;
