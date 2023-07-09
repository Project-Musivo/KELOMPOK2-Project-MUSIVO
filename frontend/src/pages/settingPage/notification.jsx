import React, { useEffect } from "react";
import Sidebar from "../../components/layouts/sidebar/sidebar";
import NavigationBar from "../../components/layouts/navigationBar/navigationBar";
import SidebarSetting from "../../components/layouts/sideSetting/sidebarSetting";
import HeaderSetting from "../../components/layouts/headerSetting/headerSetting";
import NotifAccAccord from "../../components/notifAcc/notifAcc";

const NotifSet = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Mengatur posisi scroll ke bagian atas saat halaman dimuat
  }, []);
  return (
    <React.Fragment>
      <Sidebar />
      <div>
        <NavigationBar />
        <div className="ms-[80px]">
          <HeaderSetting title="Settings" />
          <SidebarSetting />
          <div className="ms-[280px] mt-[180px]">
            <div className="items-center justify-between mt-6">
              <h2 className="text-[30px] font-semibold w-72 text-center -ms-1">
              Notification Setting
              </h2>
              <h6>pick the notifications you want to get more information about musivo</h6>
            </div>
            <div className="content py-2 px-1 mt-5">
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center mt-2">
                  <img src="./assets/icon/line.png" alt="" width={300} />
                </div>
              </div>
              <div className="setting pt-5 mr-4">
                <NotifAccAccord title='Music & Artist Recomendations' subtitle='Music and new releases from artist you follow or might you like'/>
                <NotifAccAccord title='Podcast & Show Recomendations' subtitle='Podcast and shows we think you might like'/>
                <NotifAccAccord title='Feature & Tips Musivo' subtitle='News and tips for getting the most out of the Musivo service'/>
                <NotifAccAccord title='Musivo Offers & Bundles' subtitle='Special offers for Spotify Premium and our partners'/>
                <NotifAccAccord title='Survey' subtitle='Feedback survey that will be useful to us'/>
                <NotifAccAccord title='Update Version Musivo' subtitle='You will get information about updates from Musivo'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NotifSet;
