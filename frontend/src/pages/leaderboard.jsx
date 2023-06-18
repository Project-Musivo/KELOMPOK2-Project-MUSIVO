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
} from "@material-tailwind/react";

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
            <Card className="bg-[#222222] basis-1/5 ml-auto h-full max-h-[39rem] shadow-lg">
              <TabsHeader className="bg-transparent">
                {data.map(({ label, value }) => (
                  <Tab key={value} value={value} className="text-white">
                    {label}
                  </Tab>
                ))}
              </TabsHeader>
            </Card>
            <div className="h-full max-h-[38rem] mx-auto basis-3/4">
              <TabsBody>
                {data.map(({ value, list }) => (
                  <TabPanel key={value} value={value}>
                    <div className="w-full h-2/5 mb-[28px] flex">
                      <img
                        src="./assets/album music/classic.jpg"
                        className="w-1/4 h-full rounded-lg"
                        alt=""
                        srcset=""
                      />
                    </div>
                    <Card className="w-full bg-card h-3/5 ">
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
