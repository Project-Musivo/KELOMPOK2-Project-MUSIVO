import React, { useEffect } from "react";
import NavigationBar from "../components/layouts/navigationBar/navigationBar";
import Sidebar from "../components/layouts/sidebar/sidebar";
// import Listfav from "../components/listFav/listfav";
// import TableList from "../components/tableList/tableList";
// import { dataTopanime10, dataTopglobal50, dataTopWest70 } from "../../data/music";
import { data } from "../data/rank";

import {
  Card,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Typography,
} from "@material-tailwind/react";

const Leaderboard = () => {
  const [activeTab, setActiveTab] = React.useState("html");

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveTab(data[0].value); // Mengatur posisi scroll ke bagian atas saat halaman dimuat
  }, []);
  return (
    <React.Fragment>
      <Sidebar />
      <div>
        <NavigationBar />
        <Tabs value="" orientation="vertical">
          <div className="h-[40rem] w-full pt-10 ms-[65px] ps-[60px] flex flex-row mt-[70px]">
            <Card className="bg-[#222222] w-[15rem] ml-auto h-[38rem] shadow-lg">
              <TabsHeader className="bg-transparent">
                {data.map(({ label, value }) => (
                  <Tab
                    key={value}
                    value={value}
                    onClick={() => setActiveTab(value)}
                    className={`text-white ${
                      activeTab === value ? "text-black" : ""
                    } transition-colors duration-400`}
                  >
                    {label}
                  </Tab>
                ))}
              </TabsHeader>
            </Card>
            <div className="custom-scrollbar overflow-auto h-full mx-auto basis-3/4">
              <TabsBody>
                {data.map(({ value, list, label, img, desc }) => (
                  <TabPanel key={value} value={value}>
                    <div className="w-full h-[15rem] mb-[28px] flex flex-row items-center">
                      <img
                        src={img}
                        className="w-1/4 h-full rounded-lg"
                        alt=""
                        srcset=""
                      />
                      <div className="ms-5 text-white">
                        <Typography className="text-sm font-extrabold text-gray-500">
                          Public Playlist
                        </Typography>
                        <Typography variant="h1" className="text-7xl mt-2">
                          {label}
                        </Typography>
                        <Typography className="text-sm font-thin ms-1 mt-4 text-gray-400">
                          {desc}
                        </Typography>
                        <Typography className="text-md font-medium  mt-2 text-gray-300 flex flex-row items-center">
                          <span>
                            <img
                              src="./assets/logo.png"
                              className="w-8 rounded-full"
                            />
                          </span>
                          Musivo ● 1,124,719 likes ● 50 songs about 2 hr 45 min
                          ● 5 new entries
                        </Typography>
                      </div>
                    </div>
                    <Card className="w-full bg-card h-full ">
                      {/* <Listfav /> */}
                      {list}
                    </Card>
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
