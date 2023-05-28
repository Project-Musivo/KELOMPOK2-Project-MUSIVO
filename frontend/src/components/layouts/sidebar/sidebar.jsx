import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const Menus = [
    { title: "Home", src: "home", path: "/" },
    { title: "Playlist", src: "playlist", path: "/playlist" },
    { title: "Artisc ", src: "user", path: "/artisc" },
    { title: "Favorit", src: "favorit", path: "/favorit" },
    { title: "Leaderboard", src: "trophy", path: "/leaderboard" },
    // { title: "Settings ", src: "setting", path: "/settings" },
    // { title: "Logout", src: "logout", gap: true },
  ];

  return (
    <div className="flex fixed top-0 z-50">
      <div
        className={`bg-14 ${
          open ? "w-72" : "w-20"
        }  h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="./assets/icon/control.png"
          className={`absolute cursor-pointer -right-3 top-[70px] w-7 border-dark-purple
          border-2 rounded-full z-20 ${!open && "rotate-180"} w-[35px]`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-3 items-center absolute top-5 left-2 w-[70px]">
          <img
            src={"./assets/logo.png"}
            className={`w-[60px] cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-[35px] duration-[0.3s] ${
              !open && "scale-0"
            }`}
            style={{ fontFamily: "Josefin Sans, sans-serif" }}
          >
            Musivo
          </h1>
        </div>
        <ul className="pt-[90px]">
          {Menus.map((Menu, index) => (
            <Link to={Menu.path}>
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-3"} ${index === 0 && "bg-light-white"}
              ${open && `hover:text-slate-100 hover:bg-gray-500`}
              `} // != >= W <= != //
              >
                <img src={`./assets/icon/${Menu.src}.svg`} />
                <span
                  className={`${
                    open ? "" : "scale-0"
                  } origin-left duration-[0.3s]`}
                >
                  {Menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
        <p
          className={`text-white absolute  bottom-5 opacity-50 text-sm duration-[0.4s] ${
            open ? "left-[125px]" : "left-6"
          }`}
        >
          1.0.0
        </p>
      </div>
    </div>
  );
};
export default Sidebar;
