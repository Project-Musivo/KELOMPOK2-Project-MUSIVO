import React, { useState } from "react";

const Headermusic = () => {
  const [active, setActive] = useState(false);

  const togglePlay = () => {
    setActive(!active);
  };

  return (
    <div className=" w-full  ps-[150px] py-[30px]">
      <div className="flex items-center">
        <img
          src="./assets/album music/collide.jpg"
          alt=""
          style={{ boxShadow: "0px 0px 50px rgba(255, 255, 255, 0.3)" }}
        />
        <div className="flex flex-col ms-10">
          <h3 className="text-[35px] font-semibold  ">Collide</h3>
          <p className="opacity-70">Nanaa, 04 songs, 4 februari 2023</p>
          <div className="flex items-center mt-5 justify-between w-[120px]">
            <span
              className="p-5 bg-slate-100 w-[50px] h-[50px] rounded-full cursor-pointer "
              style={{
                backgroundImage: `url(${
                  active ? "./assets/icon/pause.png" : "./assets/icon/start.png"
                })`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroudnSize: "cover",
              }}
              onClick={() => togglePlay()}
            ></span>
            <div className=" mt-5   ">
              <img src="./assets/icon/detail-white.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headermusic;
