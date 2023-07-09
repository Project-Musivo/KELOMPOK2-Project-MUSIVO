import React, { useEffect } from "react";
import NavigationBar from "../components/layouts/navigationBar/navigationBar";
import Sidebar from "../components/layouts/sidebar/sidebar";
import Footer from "../components/layouts/footer/footer";

const Browse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Sidebar />
      <div>
        <NavigationBar />
        <div className="home ps-[100px] mt-[100px] mb-20 h-[40rem]"></div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Browse;