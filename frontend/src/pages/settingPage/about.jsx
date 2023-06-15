import React from "react";
import Sidebar from "../../components/layouts/sidebar/sidebar";
import NavigationBar from "../../components/layouts/navigationBar/navigationBar";
import SidebarSetting from "../../components/layouts/sideSetting/sidebarSetting";
import HeaderSetting from "../../components/layouts/headerSetting/headerSetting";
import Developer from "../../components/developers/developers";

const AboutDev = () => {
  return (
    <React.Fragment>
      <Sidebar />
      <div>
        <NavigationBar />
        <div className="ms-[80px]">
          <HeaderSetting title="Settings" />
          <SidebarSetting />
          <div className="ms-[250px] mt-[180px]">
            <div className="flex items-center justify-between mt-6">
              <h2 className="text-[30px] font-semibold w-72 text-center -ms-8">
                About Musivo
              </h2>
              <div className="flex items-center mt-2">
                <img src="./assets/icon/line.png" alt="" width={700} />
              </div>
            </div>
            <div className="content py-2 px-3 mt-5">
              <div className="flex justify-between w-[600px]">
                <div className="w-64">
                  <h3 className="text-[30px] font-semibold">Musivo</h3>
                  <p>
                    Nama Musivo Merupakan singkatan dari Music IVO, IVO sendiri
                    adalah singkatan dari Innovatif Virtual Organization
                  </p>
                </div>
                <div>
                  <div>
                    <h3 className="text-[27px] font-semibold">Rilis</h3>
                    <p className="opacity-50">-</p>
                  </div>
                  <div>
                    <h3 className="text-[27px] font-semibold">Versi</h3>
                    <p className="opacity-50">1.0.0</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center mt-2">
                  <img src="./assets/icon/line.png" alt="" width={600} />
                </div>
                <h2 className="text-[30px] font-semibold w-72 text-center -ms-8">
                  About Developer
                </h2>
              </div>
              <Developer />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutDev;
