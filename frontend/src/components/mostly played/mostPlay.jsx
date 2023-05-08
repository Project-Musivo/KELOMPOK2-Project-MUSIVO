import { useState } from "react";

const MostlyPlayed = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const togglePlay = (i) => {
    setActiveIndex(i === activeIndex ? null : i);
  };

  const boxes = [];
  for (let i = 1; i <= 6; i++) {
    const isPlaying = activeIndex === i;
    boxes.push(
      <div
        className="boxPlay bg-white text-black py-3 w-[325px] flex items-center justify-evenly flex-wrap rounded-[5px]"
        key={i}
      >
        <span className="font-extrabold">0{i}</span>
        <img
          src="./assets/album music/anggurman.png"
          alt=""
          className="w-[80px]"
        />
        <div className="title" style={{ marginLeft: "-10px" }}>
          <h3>Anggurman</h3>
          <p className="text-[15px] opacity-50">Jason Ranti</p>
        </div>

        <img
          src={
            isPlaying ? "./assets/icon/pause.png" : "./assets/icon/start.png"
          }
          alt=""
          className="cursor-pointer"
          onClick={() => togglePlay(i)}
        />
        <img src="./assets/icon/detail.png" alt="" className="cursor-pointer" />
      </div>
    );
  }

  return (
    <div className="mostlyplayed flex justify-start gap-3 flex-wrap w-100 h-45 ">
      {boxes}
    </div>
  );
};

export default MostlyPlayed;
