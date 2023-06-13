import React, { useState } from "react";
import NavigationBar from "../components/layouts/navigationBar/navigationBar";
import Sidebar from "../components/layouts/sidebar/sidebar";
import TableList from "../components/tableList/tableList";

const Playlist = () => {
  const [isToogle, setIsToogle] = useState(false);
  const toogleClick = () => {
    setIsToogle(!isToogle);
  };

  return (
    <React.Fragment>
      <div className="flex">
        <Sidebar />
        <div className="w-screen">
          <NavigationBar />
          <div className="playlist ps-[125px] pe-[50px]">
            <div className="flex mt-[100px] mb-[50px]">
              <img
                src="./assets/album music/collide.jpg"
                className="w-[225px] rounded-lg"
              />
              <div className="flex flex-col mt-[80px] mx-10">
                <h1 className="text-[28px] font-bold ">Morning Vibes</h1>
                <p className="text-[12px]">
                  <span className="font-bold">Nanaa</span>, 4 Playlist , 6 Mei
                  2023
                </p>
                <div className="flex">
                  <img
                    src={
                      isToogle
                        ? "./assets/icon/paused.png"
                        : "./assets/icon/play.png"
                    }
                    onClick={toogleClick}
                    alt=""
                    className="cursor-pointer w-[50px]  mt-[25px]"
                  />
                  <img
                    src="./assets/icon/detail-white.png"
                    alt=""
                    className="cursor-pointer w-[35px] h-[10px] mx-8 mt-[44px]"
                  />
                </div>
              </div>
            </div>
            <div className="">
              <TableList />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Playlist;
