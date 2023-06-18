import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const [selectedMenu, setSelectedMenu] = useState(null);
  const Menus = [
    { title: "Dasboard", src: "dashboard", path: "/" },
    { title: "Music", src: "file music", path: "/music" },
    { title: "Data User ", src: "users", path: "/datauser" },
    { title: "Setting", src: "settings", path: "/setting" },
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
          <div>
            <div className="flex flex-col items-center">
            <h1
              className={`text-white origin-left font-medium text-[35px] duration-[0.3s] ${
                !open && "scale-0"
              }`}
              style={{ fontFamily: "Josefin Sans, sans-serif" }}
            >
              Musivo
            </h1>
            <p
              className={`text-white origin-left font-medium text-[20px] duration-[0.3s] ${
                !open && "scale-0"
              }`}
              style={{ fontFamily: "Josefin Sans, sans-serif" }}
            >
              Admin
            </p>
            </div>
          </div>
        </div>
        <ul className="pt-[90px]">
          {Menus.map((Menu, index) => (
            <Link to={Menu.path}>
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-3"} ${index === 0 && "bg-light-white"}
              ${open && `hover:text-slate-100 hover:bg-gray-500`}
              `}
              >
                <img src={`./assets/icon/icon admin/${Menu.src}.svg`} />
                <span
                  className={`${
                    open ? "" : "scale-0"
                  } origin-left duration-[0.3s]`}
                >
                  {Menu.title}
                </span>
                
          <img src="./assets/icon/logout.png" alt="Image Description" className={`text-white absolute  bottom-5 opacity-50 text-sm`} />
          <span className={`text-white absolute  bottom-5 opacity-50 text-sm ${
                    open ? "" : "scale-0"
                  } origin-left duration-[0.3s]`}
          style={{marginLeft: "100px"}}
          >
            logout
          </span>
              </li>
            </Link>
          ))}
        </ul>
        <div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
