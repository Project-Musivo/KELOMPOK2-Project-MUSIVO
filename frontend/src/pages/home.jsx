import React, { useEffect } from "react";
import NavigationBar from "../components/layouts/navigationBar/navigationBar";
import Sidebar from "../components/layouts/sidebar/sidebar";
import Genre from "../components/genreMusic/genre";
import MostlyPlayed from "../components/mostly played/mostPlay";
import TopPlaylist from "../components/top playlist/topPlay";
import Footer from "../components/layouts/footer/footer";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Mengatur posisi scroll ke bagian atas saat halaman dimuat
  }, []);

  return (
    <React.Fragment>
      <Sidebar />
      <div>
        <NavigationBar />
        <div className="home ps-[100px] mt-[100px] mb-20">
          <div className="ms-[30px]">
            <div className="ucapan mt-[40px]">
              <h3 className="text-[28px] font-semibold">Good Morning, Nanaa</h3>
            </div>
            <Genre />
          </div>
          <div className="flex">
            <div className="mostPlay w-[58%]">
              <h2 className="text-[25px] mt-[30px] mb-3 font-semibold ms-3">
                Mostly Played
              </h2>
              <MostlyPlayed />
            </div>
            <div className="topPlay ms-7">
              <h2 className="text-[25px] mt-[30px] mb-3 font-semibold ms-3">
                Top Playlist
              </h2>
              <TopPlaylist />
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </React.Fragment>
  );
};

export default Home;
