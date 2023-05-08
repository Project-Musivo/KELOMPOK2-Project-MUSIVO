import React from "react";

const NavigationBar = () => {
  const seacrhStyle = {
    backgroundImage: "url('./assets/icon/search-Icon.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "20px",
    backgroundPosition: "10px center",
    paddingLeft: "35px",
  };

  const styleSelect = {
    textAlignLast: "center",
  };

  return (
    <nav
      className="bg-[#1B1A1B] py-3"
      style={{ boxShadow: "0px 2px 2px rgba(255, 255, 255, 0.25)" }}
    >
      <div className="container ps-[150px] pe-[4%]  flex justify-between items-center">
        <div className="searchBar">
          <input
            type="search"
            name="searchbar"
            placeholder="Search Top 5 Global"
            className="py-[5px] px-[130px] rounded-md"
            style={seacrhStyle}
          />
        </div>
        <div className="user flex items-center justify-end me-[-20px]">
          <img src="./assets/profileUser.png" alt="" className="w-[40px]" />
          <div className="username border-e-2 ps-2 pe-2 me-4">
            <span className="text-white">Nanaa</span>
            <select
              name=""
              id=""
              className="rounded-full p-[2px] mx-3 px-[3px]"
              style={styleSelect}
            >
              <option value="" disabled></option>
            </select>
          </div>

          <img src="./assets/icon/bell2.png" alt="" className="w-[20px]" />
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
