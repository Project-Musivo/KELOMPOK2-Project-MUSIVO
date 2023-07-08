import { useState } from "react";
import { dataMostPlay } from "../../data/music";

const MostlyPlayed = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const togglePlay = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  console.log({ data: dataMostPlay.map((x) => x.id) });

  return (
    <div className="mostlyplayed flex justify-center gap-3 flex-wrap w-100 h-45">
      {dataMostPlay.map((music, index) => {
        const isPlaying = activeIndex === index;
        return (
          <div
            className="boxPlay bg-white border text-[#000] py-3 w-[400px] flex items-center  flex-wrap rounded-[5px]"
            key={index.id}
          >
            <span className="font-extrabold w-3 mx-3">{music.id}</span>
            <img src={music.image} alt="" className="w-[80px] me-3 rounded-lg" />
            <div className="title -ms-1">
              <h3 className="w-[150px]">{music.title}</h3>
              <p className="text-[15px] opacity-50">{music.artits}</p>
            </div>

            <img
              src={
                isPlaying
                  ? "./assets/icon/pause.png"
                  : "./assets/icon/start.png"
              }
              alt=""
              className="cursor-pointer ms-auto -me-[30px] "
              onClick={() => togglePlay(index)}
            />
            <img
              src="./assets/icon/detail.png"
              alt=""
              className="cursor-pointer ms-auto me-6"
            />
          </div>
        );
      })}
    </div>
  );
};

export default MostlyPlayed;
