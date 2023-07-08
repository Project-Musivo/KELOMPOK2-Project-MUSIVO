import { dataTopPlay } from "../../data/music";

const TopPlaylist = () => {
  return (
    <div className="topPlay flex flex-col items-center">
      {dataTopPlay.map((music, index) => (
        <div
          className="boxTop flex items-center justify-evenly flex-wrap bg-white text-[#000] py-3 w-[400px]  pe-3 rounded-md mb-4"
          key={index.id}
        >
          <span>0{music.id}</span>
          <img src={music.image} alt="" className="w-[60px] rounded-[7px]" />
          <h3 className="-ms-6">{music.title}</h3>
          <p className="w-50 text-[13px] opacity-60 -ms-3">
            Top Listener <br /> {music.listener}
          </p>
          <div className="flex items-center">
            <img src="./assets/icon/star.png" alt="" className="me-1" />
            <span>{music.rate}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopPlaylist;
