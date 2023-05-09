const TopPlaylist = () => {
  return (
    <div className="topPlay">
      <div className="boxTop flex items-center justify-evenly flex-wrap bg-white text-black py-3 w-[400px]  pe-3 rounded-md mb-4">
        <span>01</span>
        <img
          src="./assets/album music/beatles.png"
          alt=""
          className="w-[60px] rounded-[7px]"
        />
        <h3 className="-ms-6">The Beatles</h3>
        <p className="w-50 text-[13px] opacity-60 -ms-3">
          Top Listener <br /> 30,540,439
        </p>
        <div className="flex items-center">
          <img src="./assets/icon/star.png" alt="" className="me-1" />
          <span>4.5</span>
        </div>
      </div>
    </div>
  );
};

export default TopPlaylist;
