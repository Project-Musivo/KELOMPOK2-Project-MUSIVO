import React, { useState, useEffect } from "react";
import { Input } from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import ProfileMenu from "./profileMenu";
import Toogle_notif from "../../notification/toogle_notif";

const NavigationBar = () => {
  const [bellImg, setBellImg] = useState("./assets/icon/bell2.png");

  useEffect(() => {
    const interval = setInterval(() => {
      setBellImg((prevImg) =>
        prevImg === "./assets/icon/bell2.png"
          ? "./assets/icon/bell1.png"
          : "./assets/icon/bell2.png"
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav
      className="border-gray-200 ms-[80px] bg-[#1B1A1B] fixed w-full pe-20 top-0 z-40"
      style={{ boxShadow: "0px 2px 2px rgba(255, 255, 255, 0.25)" }}
    >
      <div className="max-w-screen-xl flex items-center justify-between p-4">
        <div className="ms-7 w-1/2 md:w-72">
          <form className="flex items-center">
            <label for="voice-search" className="sr-only">
              Search 'Top Global Populer In TikTok'
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <MagnifyingGlassIcon />
              </div>
              <input
                type="text"
                id="voice-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos, Design Templates..."
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              ></button>
            </div>
          </form>
        </div>
        <div className="ms-auto border-e-2 pe-2 me-5">
          <ProfileMenu />
        </div>
        {/* <img src={bellImg} alt="" width={20} /> */}
        <Toogle_notif />
      </div>
    </nav>
  );
};

export default NavigationBar;
