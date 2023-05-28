import { Topanime10 } from "../components/listleaderboard/topanime10";
import { Topglobal50 } from "../components/listleaderboard/topglobal50";
import { Topwest70 } from "../components/listleaderboard/topwest70";

const data = [
  {
    label: "Top Global 50",
    img: "../../public/assets/album music/classic.jpg",
    list: <Topglobal50 />,
  },
  {
    label: "Top West 70",
    img: "../../public/assets/album music/classic.jpg",
    list: <Topwest70 />,
  },
  {
    label: "Top Anime 10",
    img: "../../public/assets/album music/classic.jpg",
    list: <Topanime10 />,
  },
];

export { data};
