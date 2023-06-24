import React, { useState } from "react";
import Sidebaradmin from "../../components/layouts/sidebar/sidebaradmin";
import Navbar from "../../admin components/navbarmusic";

  const Music = () => {
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
export default Music;
