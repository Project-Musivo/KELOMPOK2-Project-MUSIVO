import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {

  const [selectedMenu, setSelectedMenu] = useState(null);
  const Menus = [
    { title: "Dasboard", src: "home", path: "/" },
    { title: "Music", src: "playlist", path: "/playlist" },
    { title: "Data User", src: "user", path: "/artisc" },
    { title: "Settings", src: "setting", path: "/dasboardadmin" },
    { title: "Logout", src: "logout", gap: true },
  ];

  return (
    <div className="flex fixed" style={{ zIndex: "2" }}>
      <div
        className={` h-screen p-5  pt-8 relative duration-300`}
        style={{ backgroundColor: "#141414", borderRight: "2px solid gray" }}
      >
        <ul>
          {Menus.map((Menu, index) => (
            <Link to={Menu.path}>
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-3"} ${index === 0 && "bg-light-white"}
              ${open && `hover:text-slate-100 hover:bg-gray-500`}
              `}
              >
                <img src={`./assets/icon/${Menu.src}.png`} />
                <span>
                  {Menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
