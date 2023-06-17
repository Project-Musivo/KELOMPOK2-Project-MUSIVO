import DataTopanime10 from "../components/listleaderboard/topanime10";
import Topglobal50 from "../components/listleaderboard/topglobal50";
import DataTopWest70 from "../components/listleaderboard/topwest70";

const data = [
  {
    value: "global",
    label: "Top Global 50",
    img: "./assets/album music/classic.jpg",
    list: <Topglobal50 />,
  },
  {
    value: "west",
    label: "Top West 70",
    img: "./assets/album music/popular.jpg",
    list: <DataTopWest70 />,
  },
  {
    value: "anime",
    label: "Top Anime 10",
    img: "./assets/album music/rock.jpg",
    list: <DataTopanime10 />,
  },
];

export { data };


