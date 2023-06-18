import React, { useState } from "react";
import Sidebaradmin from "../../components/layouts/sidebar/sidebaradmin";
import Navbar from "../../admin components/navbardatauser";

  const DataUser = () => {
    return (
        <React.Fragment>
          <div>
          <Sidebaradmin />
            <div>
         
          <Navbar />
 
            </div>
        </div>
        </React.Fragment>
      );
    };
export default DataUser;
