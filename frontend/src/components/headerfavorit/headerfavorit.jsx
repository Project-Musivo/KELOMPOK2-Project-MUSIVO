import React, { useState } from "react";

const Headerfavorit = () => {
  const [active, setActive] = useState(false);

  const togglePlay = () => {
    setActive(!active);
  };

  return (
    <div className=" w-full  ps-[150px] py-[30px]">
      <div className="flex items-center">
        <img
          src="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png" 
          alt=""
          style={{ boxShadow: "0px 0px 50px rgba(255, 255, 255, 0.3)" }}
        />
        <div className="flex flex-col ms-10">
          <h3 className="text-[85px] font-extrabold">Liked Songs</h3>
          <p className="opacity-70">Nanaa, 04 songs</p>
          <div className="flex items-center mt-5 justify-between w-[120px]">
            <span
              className="p-5 bg-white w-[50px] h-[50px] rounded-full cursor-pointer "
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

export default Headerfavorit;
