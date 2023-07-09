import React, { useState } from "react";
import { dataSongLyrics } from "../../data/music";

const Headerfavorit = () => {
  const [active, setActive] = useState(false);

  const togglePlay = () => {
    setActive(!active);
  };

  const songData = dataSongLyrics.find((song) => song.id === 1);

  return (
    <div className=" w-full  ps-[150px] py-[30px]">
      <div className="flex items-center">
        <img
          src={songData.image}
          alt=""
          style={{ boxShadow: "0px 0px 50px rgba(255, 255, 255, 0.3)" }}
        />
        <div className="flex flex-col ms-10">
          <h3 className="text-[85px] font-extrabold">{songData.title}</h3>
          <p>
            <img
                src={songData.miniImg}
                alt="img"
                className="inline-block w-8 h-8 mr-2"
                />
                <span className="font-bold">{songData.artis}</span> {songData.year}
          </p>

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
            <div className="toogle">
              <img src="./assets/icon/detail-white.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headerfavorit;
