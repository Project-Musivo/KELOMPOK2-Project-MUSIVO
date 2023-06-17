import React from "react";

const Box = ({ number, text, image }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        border: "1px solid blue",
        borderRadius: "4px",
        padding: "0px",
        margin: "0px", // Menghilangkan margin
        width: "280px",
        height: "120px",
        marginLeft: "200px", // Menambahkan margin kiri sebesar 200px
      }}
    >
      <img src={image} alt="gambar" style={{ width: "80px", height: "80px", marginRight: "2px" }} />
      <div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center",marginRight: "200px" }}>
          <p style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>{number.toLocaleString()}</p>
          <p style={{ textAlign: "center" }}>{text}</p>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div style={{ display: "flex" }}>
      <Box
        number={10000}
        text="Music"
        image="./assets/logo.png"
      />
      <Box
        number={5689}
        text="Total User"
        image="./assets/logo.png"
      />
      <Box
        number={60000}
        text="Total Playlist"
        image="./assets/logo.png"
      />
      <Box
        number={40}
        text="Request Music"
        image="./assets/logo.png"
      />
    </div>
  );
};

export default App;
