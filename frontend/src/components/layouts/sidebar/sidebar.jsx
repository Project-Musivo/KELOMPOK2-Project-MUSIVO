import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Link, NavLink, useLocation } from "react-router-dom";

// import Logo from "../../../assets/logo.png";
// import Logo from "../../../../public/logo.png";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  // const [selectedMenu, setSelectedMenu] = useState(null);
  // const location = useLocation();
  const Menus = [
    { title: "Home", src: "home", path: "/" },
    { title: "Playlist", src: "playlist", path: "/playlist" },
    { title: "Artisc ", src: "user", path: "/artisc" },
    { title: "Favorit", src: "favorit", path: "/favorit" },
    { title: "Leaderboard", src: "trophy", path: "/leaderboard" },
    { title: "Settings ", src: "setting", path: "/settings" },
    // { title: "Logout", src: "logout", gap: true },
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
          className={`absolute cursor-pointer -right-3 top-[70px] w-7 border-dark-purple
           border-2 rounded-full ${!open && "rotate-180"} w-[35px]`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-3 items-center ">
          <img
            src={"./assets/logo.png"}
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
        <ul className='pt-[20px]'>
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-3"} ${
                index === 0 && "bg-light-white"
              }
              ${open && `hover:text-slate-100 hover:bg-gray-500`}
              `}
            >
              {/* <Link to={menu.path}>
                <img src={`./assets/icon/${menu.src}.png`} alt={menu.title} />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {menu.title}
                </span>
              </Link> */}
              
              {/* <NavLink
                exact
                to={Menu.link}
                activeClassName="bg-gray-500 text-slate-100"
                className={`${open && "origin-left duration-200"} ${
                  !open && "hidden"
                }`}
              >
                <img src={`./assets/icon/${Menu.src}.png`} />
                <span className="ml-2">{Menu.title}</span>
              </NavLink> */}

              {/* <Link to={`/${Menu.src}`}> */}
                <img src={`./assets/icon/${Menu.src}.png`} />
                <span className={`${!open && "hidden"} origin-left duration-200`}>
                  {Menu.title}
                </span>
              {/* </Link> */}
            </li> 

          ))}
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
