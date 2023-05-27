import { useState } from "react";
import { dataMostPlay } from "../../data/music";

const MostlyPlayed = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const togglePlay = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="mostlyplayed flex justify-start gap-3 flex-wrap w-100 h-45">
      {dataMostPlay.map((music, index) => {
        const isPlaying = activeIndex === index;
        return (
          <div
            className="boxPlay bg-white text-black py-3 w-[325px] flex items-center justify-evenly flex-wrap rounded-[5px]"
            key={music.id}
          >
            <span className="font-extrabold">{music.id}</span>
            <img src={music.image} alt="" className="w-[80px]" />
            <div className="title" style={{ marginLeft: "-10px" }}>
              <h3>{music.title}</h3>
              <p className="text-[15px] opacity-50">{music.artits}</p>
            </div>

            <img
              src={
                isPlaying
                  ? "./assets/icon/pause.png"
                  : "./assets/icon/start.png"
              }
              alt=""
              className="cursor-pointer"
              onClick={() => togglePlay(index)}
            />
            <img
              src="./assets/icon/detail.png"
              alt=""
              className="cursor-pointer"
            />
          </div>
        );
      })}
    </div>
  );
};

export default MostlyPlayed;
