import React, { useEffect } from "react";
import NavigationBar from "../components/layouts/navigationBar/navigationBar";
import Sidebar from "../components/layouts/sidebar/sidebar";
// import Listfav from "../components/listFav/listfav";
// import TableList from "../components/tableList/tableList";
import { data } from "../data/rank";
// import DataTopWest70 from "../components/listleaderboard/topwest70";
// import DataTopanime10 from "../components/listleaderboard/topanime10";
// import Topglobal50 from "../components/listleaderboard/topglobal50";
import {
  Card,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

// const data = [
//   {
//     value: "global",
//     label: "Top Global 50",
//     img: "./assets/album music/classic.jpg",
//     list: <Topglobal50 />,
//   },
//   {
//     value: "west",
//     label: "Top West 70",
//     img: "./assets/album music/classic.jpg",
//     list: <DataTopWest70 />,
//   },
//   {
//     value: "anime",
//     label: "Top Anime 10",
//     img: "./assets/album music/classic.jpg",
//     list: <DataTopanime10 />,
//   },
// ];

const Leaderboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Mengatur posisi scroll ke bagian atas saat halaman dimuat
  }, []);
  return (
    <React.Fragment>
      <Sidebar />
      <div>
        <NavigationBar />
        <Tabs value="global" orientation="vertical">
          <div className="h-screen w-full pt-10 ms-[65px] ps-[60px] flex mt-[60px]">
            <Card className="bg-card2 basis-1/5 ml-auto h-full max-h-[39rem] shadow-lg">
              <TabsHeader className="bg-transparent">
                {data.map(({ value, label }) => (
                  <Tab
                    key={value}
                    value={value}
                    className={`${
                      value === true ? "text-white" : "text-black"
                    }`}
                  >
                    {label}
                  </Tab>
                ))}
              </TabsHeader>
            </Card>
            <div className="h-full max-h-[38rem] mx-auto basis-3/4">
              <TabsBody>
                {data.map(({ list, value, img }) => (
                  <TabPanel key={value} value={value}>
                    <div className="w-full h-2/5 mb-[28px] flex">
                      <img
                        src="./assets/album music/classic.jpg"
                        className="w-1/4 h-full rounded-lg"
                        alt=""
                      />
                    </div>
                    <Card className="w-full bg-card h-3/5">{list}</Card>
                  </TabPanel>
                ))}
              </TabsBody>
            </div>
          </div>
        </Tabs>
      </div>
    </React.Fragment>
  );
};

export default Leaderboard;
