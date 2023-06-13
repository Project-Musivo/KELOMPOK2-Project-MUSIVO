import { Link } from "react-router-dom";

const SidebarSetting = () => {
  return (
    <div className="border-e-2 h-screen w-[230px] flex flex-col top-[149px] items-center fixed">
      <ul className=" h-[200px] flex flex-col justify-evenly text-[20px] font-semibold mt-3">
        <Link to={""}>
          <li
            className={`hover:opacity-50 duration-[0.3s] ${
              window.location.pathname === "/account" ? "border-s-2 ps-3" : ""
            }`}
          >
            Account
          </li>
        </Link>
        <Link to="">
          <li
            className={`hover:opacity-50 duration-[0.3s] ${
              window.location.pathname === "/notification"
                ? "border-s-2 ps-3"
                : ""
            }`}
          >
            Notification
          </li>
        </Link>
        <Link to="">
          <li
            className={`hover:opacity-50 duration-[0.3s] ${
              window.location.pathname === "/about" ? "border-s-2 ps-3" : ""
            }`}
          >
            About
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SidebarSetting;
