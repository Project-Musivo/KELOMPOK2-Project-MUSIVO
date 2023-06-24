import React, { useState } from "react";
import Sidebaradmin from "../../components/layouts/sidebar/sidebaradmin";
import Navbar from "../../admin components/navbarsetting";

  const Setting = () => {
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
export default Setting;
