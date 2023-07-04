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
          <Input
            label="Cari Top 5 Global"
            className="text-white"
            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
          />
        </div>
        <div className="ms-auto border-e-2 pe-2 me-5">
          <ProfileMenu />
        </div>
        {/* <img src={bellImg} alt="" width={20} /> */}
        <Toogle_notif/>
      </div>
    </nav>
  );
};

export default NavigationBar;
