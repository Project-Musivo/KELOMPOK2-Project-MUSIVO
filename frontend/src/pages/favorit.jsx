import React, { useState } from "react";
import NavigationBar from "../components/layouts/navigationBar/navigationBar";
import Sidebar from "../components/layouts/sidebar/sidebar";
import Listfav from "../components/listFav/listfav";
import Headerfavorit from "../components/headerfavorit/headerfavorit";

// import Headermusic from "../components/headermusic/header";
// import TableList from "../components/tableList/tableList";

  const Favorit = () => {
    const [isToogle, setIsToogle] = useState(false);
    const toogleClick = () => {
      setIsToogle(!isToogle);
    };
    return (
        <React.Fragment>
        <Sidebar />
          <div>
            <NavigationBar />
            <div className="h-screen" style={{background:"linear-gradient(172.17deg, #53559b 6.33%, rgba(20, 20, 20, 0.82) 59.2%, rgba(38, 34, 34, 0) 91.81%)",}}>
            <Headerfavorit />
            <div className="ps-[80px] pe-[10px]">
              <Listfav />
            </div>
            
          </div>
        </div>
        </React.Fragment>
      );
    };
export default Favorit;
