import React from "react";

const ProfileSetting = () => {
  return (
    <>
      <h1 className="font-bold text-white w-36 ml-12 mt-4 text-2xl">
        Edit Profile
      </h1>
      <hr className="bg-gray-900 w-full mt-4 border-2" />

      <div className="flex h-screen mr-72">
        <div className="flex flex-col items-start justify-center h-screen ">
          <div className="w-44 h-44 rounded-full overflow-hidden ml-40">
            <img
              className="w-full h-full object-cover"
              src="./assets/icon/profile.png"
              alt=""
            />
          </div>
          <button className="mt-8 ml-52 bg-gray-300 hover:bg-gray-600 text-black font-bold py-2 px-4 rounded">
            Ubah
          </button>
        </div>
        <div className="ml-16 mt-60 flex-col items-start">
          <input
            className="rounded-lg bg-black border-2  pl-7 focus:border-white focus:bg-gray-900 focus:outline-none"
            type="text"
            placeholder="First Name"
          />
          <input
            className="rounded-lg bg-black border-2 pl-8 ml-40 focus:border-white focus:bg-gray-900 focus:outline-none"
            type="text"
            placeholder="Last Name"
          />
          <input
            className="w-full mt-8 bg-black border-2 focus:border-white focus:bg-gray-900 focus:outline-none border  rounded-lg py-2 px-4"
            type="email"
            placeholder="Your Email"
          />
          <button className="mt-12 ml-52 bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-16 rounded-md">
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileSetting;
