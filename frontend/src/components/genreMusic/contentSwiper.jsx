const ContentSwiper = (props) => {
  const styleContent = {
    backgroundImage: `linear-gradient(228.61deg, rgba(0, 0, 0, 0) 2.7%, rgba(0, 0, 0, 0) 2.7%, rgba(0, 0, 0, 0.65) 66.94%, #000000 100%, #000000 100%) , url('${props.img}') `,
    padding: "85px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    borderRadius: "5px",
  };
  const styleGenre = {
    position: "absolute",
    bottom: "0",
    left: "10px",
    padding: "10px",
  };

  return (
    <div
      className="content-swiper cursor-pointer"
      style={styleContent}
      onClick={() => alert("Masih dalam tahap pengembangan")}
    >
      <div className="genreName" style={styleGenre}>
        <p className="text-[26px] font-semibold ">{props.genre}</p>
      </div>
    </div>
  );
};

export default ContentSwiper;
