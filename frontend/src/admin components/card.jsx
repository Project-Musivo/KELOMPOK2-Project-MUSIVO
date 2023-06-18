import React from "react";

const Box = ({ number, text, image, backgroundColor }) => {
  return (
    
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        borderRadius: "4px",
        padding: "0px",
        margin: "0px", // Menghilangkan margin
        width: "280px",
        height: "120px",
        marginRight: "50px", // Menambahkan margin kiri sebesar 200px
        backgroundColor: backgroundColor, // Menambahkan properti backgroundColor
      }}
    >
      <img src={image} alt="gambar" style={{ width: "80px", height: "80px", marginRight: "20px", marginLeft: "20px"}} />
      <div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <p style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>{number.toLocaleString()}</p>
          <p style={{ textAlign: "center" }}>{text}</p>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div style={{ display: "flex", paddingLeft: "100px"}}>
      <Box
        number={10000}
        text="Music"
        image="./assets/icon/icon admin/file music.svg"
        backgroundColor="#4e26ac" 
      />
      <Box
        number={5689}
        text="Total User"
        image="./assets/icon/icon admin/users.svg"
        backgroundColor="#31b843"
      />
      <Box
        number={60000}
        text="Total Playlist"
        image="./assets/icon/icon admin/playlist.svg"
        backgroundColor="#f41853" 
      />
      <Box
        number={40}
        text="Request Music"
        image="./assets/icon/icon admin/request.svg"
        backgroundColor="#b3891f" 
      />
    </div>
  );
};

export default App;
