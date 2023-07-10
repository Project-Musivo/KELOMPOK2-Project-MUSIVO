import React from "react";
import { BsPencilSquare } from "react-icons/bs";
import { PiWarningCircleBold } from "react-icons/pi";
import { AiTwotoneDelete } from "react-icons/ai";

function TableMusic() {
  const musicData = [
    {
      id: 1,
      musicName: "Song 1",
      artist: "Artist 1",
      genre: "Genre 1",
      duration: "3:45",
    },
    {
      id: 2,
      musicName: "Song 2",
      artist: "Artist 2",
      genre: "Genre 2",
      duration: "4:20",
    },
  ];

  return (
    <>
      <div>
        <div className="container mx-auto flex justify-end font-bold">
          <button className="bg-gray-400 text-black rounded-lg py-2 px-auto mr-[128px] mb-3 px-8 hover:bg-gray-300">
            Add Music
          </button>
        </div>
        <div className="container mx-auto max-w-5xl rounded-lg overflow-hidden bg-gray-400 text-black">
          <table className="table-auto w-full ">
            <thead>
              <tr>
                <th className="border border-black px-4 py-2">ID</th>
                <th className="border border-black px-4 py-2">Music Name</th>
                <th className="border border-black px-4 py-2">Artist</th>
                <th className="border border-black px-4 py-2">Genre</th>
                <th className="border border-black px-4 py-2">Duration</th>
                <th className="border border-black px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {musicData.map((music) => (
                <tr key={music.id}>
                  <td className="border border-black text-center px-4 py-2">
                    {music.id}
                  </td>
                  <td className="border border-black text-center px-4 py-2">
                    {music.musicName}
                  </td>
                  <td className="border border-black text-center px-4 py-2">
                    {music.artist}
                  </td>
                  <td className="border border-black text-center px-4 py-2">
                    {music.genre}
                  </td>
                  <td className="border border-black text-center px-4 py-2">
                    {music.duration}
                  </td>
                  <td className="border border-black text-center py-2">
                    <button className="bg-light-blue-900 hover:bg-light-blue-700  text-white text-left py-2 px-4 rounded mr-2">
                      <div>
                        <PiWarningCircleBold className="w-7 h-5" />
                      </div>
                    </button>
                    <button className="bg-light-green-900 hover:bg-light-green-700 text-white  py-2 px-4 rounded mr-2">
                      <BsPencilSquare className="w-7 h-5" />
                    </button>
                    <button className="bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded mr-2">
                      <AiTwotoneDelete className="w-7 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default TableMusic;
