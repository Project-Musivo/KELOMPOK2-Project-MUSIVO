import React from "react";
import NavigationBar from "../components/layouts/navigationBar/navigationBar";
import Sidebar from "../components/layouts/sidebar/sidebar";
import InfoPremium from "../components/premium/InfoPremium";

const premium = () => {
  return (
    <React.Fragment>
      <Sidebar />
      <NavigationBar />
      <div className="bg-[url('./assets/background/bg2.png')] bg-cover h-[90vh] bg-no-repeat mt-[70px]">
        <div className="w-[800px] ms-[130px] py-32">
          <h1 className="text-white text-[40px] font-bold">
            Get 1 months of Premium for Rp 30,590 with e-wallets
          </h1>
          <p className="text-gray-400 text-[20px] my-7">
            Just Rp 30,590/month after. Cancel anytime.
          </p>
          <button className="bg-white text-black py-2 px-4 rounded-full font-bold">
            Get Started
          </button>
        </div>
      </div>
      <h2 className="text-white text-center font-bold py-5 text-[30px] ">
        Why Go Premium ?
      </h2>
      <div className="flex justify-center">
        <InfoPremium
          img="./assets/icon/icon user/padlock.png"
          title="Unlock Music."
          desc="Enjoy unlimited music"
        />
        <InfoPremium
          img="./assets/icon/icon user/downloadMusic.png"
          title="Download Music"
          desc="Listen anywhere"
        />
        <InfoPremium
          img="./assets/icon/icon user/music.png"
          title="Play songs in any order"
          desc="Any song, any order"
        />
      </div>
    </React.Fragment>
  );
};

export default premium;
