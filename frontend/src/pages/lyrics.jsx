import React, { useState } from "react";
import NavigationBar from "../components/layouts/navigationBar/navigationBar";
import Sidebar from "../components/layouts/sidebar/sidebar";
import MusicLyrics from "../components/musiclyrics/musiclyrics";
import Lyrics2 from "../components/musiclyrics/lyrics2";

// import Headermusic from "../components/headermusic/header";
// import TableList from "../components/tableList/tableList";

const Lyrics = () => {
  const [isToogle, setIsToogle] = useState(false);
  const toogleClick = () => {
    setIsToogle(!isToogle);
  };
  return (
    <React.Fragment>
      <Sidebar />
      <div>
        <NavigationBar />
        <div
          className="h-screen mt-[68px]"
          style={{
            background:
              "linear-gradient(172.17deg, #1F3E5D 6.33%, rgba(20, 20, 20, 0.82) 59.2%, rgba(38, 34, 34, 0) 91.81%)",
          }}
        >
          <MusicLyrics />
          <div className="ps-[80px] pe-[10px]">
            <Lyrics2 />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Lyrics;
