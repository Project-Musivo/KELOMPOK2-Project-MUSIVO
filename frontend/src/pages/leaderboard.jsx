import React from "react";
import NavigationBar from "../components/layouts/navigationBar.jsx/navigationBar";
import Sidebar from "../components/layouts/sidebar/sidebar";
import TableListImg from "../components/tableList/tableListImg";

const Leaderboard = () => {
  return (
    <React.Fragment>
      <div className="flex">
        <Sidebar />
        <div className="w-screen">
          <NavigationBar />
          <div className="leaderboard flex ps-[150px] pt-[50px] pe-[25px]">
            <div className="flex flex-col bg-[#222] ps-8  rounded-lg pt-[35px] w-[280px] h-[500px]">
              <a href="" className="my-1 border-l-2 ps-2 text-[#ffffff91]">
                Musivo Top 50
              </a>
              <a href="" className="my-1 ps-2">
                Indie Top 50
              </a>
              <a href="" className="my-1 ps-2">
                Anime Top 50
              </a>
              <a href="" className="my-1 ps-2">
                Korean Top 50
              </a>
            </div>
            <div className="flex flex-col">
              <div className="flex">
                <img
                  src="./assets/album music/top.png"
                  className="w-[180px] ml-5 rounded-lg h-[180px]"
                />
                <div className="flex flex-col ps-8 pt-10">
                  <h1 className="text-[35px] font-bold">Musivo Top 50</h1>
                  <p className="font-bold text-[13px]">
                    Pembaruan harian untuk 50 lagu yang saat ini paling sering
                    diputar di Musivo.
                  </p>
                </div>
              </div>
              <div className="ms-5 mt-5 rounded-lg bg-[#222]">
                <TableListImg />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Leaderboard;
