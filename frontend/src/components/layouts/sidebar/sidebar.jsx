import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const Menus = [
    { title: "Home", src: "home" },
    { title: "Playlist", src: "playlist" },
    { title: "Artisc ", src: "user" },
    { title: "Favorit", src: "favorit" },
    { title: "Leaderboard", src: "trophy" },
    { title: "Settings ", src: "setting" },
    { title: "Logout", src: "logout", gap: true },
  ];

  return (
    <div className="flex fixed" style={{ zIndex: "2" }}>
      <div
        className={` ${
          open ? "w-72" : "w-20"
        }  h-screen p-5  pt-8 relative duration-300`}
        style={{ backgroundColor: "black" }}
      >
        <img
          src="./assets/icon/control.png"
          className={`absolute cursor-pointer -right-3 top-[100px] w-7 border-dark-purple
           border-2 rounded-full ${!open && "rotate-180"} w-[35px]`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-3 items-center ">
          <img
            src="./assets/logo.png"
            className={`w-[70px] cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-[30px] duration-200 ${
              !open && "scale-0"
            }`}
            style={{ fontFamily: "Josefin Sans, sans-serif" }}
          >
            Musivo
          </h1>
        </div>
        <ul className="pt-[70px]">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-3"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={`./assets/icon/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
