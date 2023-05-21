import React from "react";
import { dataPlaylist } from "../../data/music";

const TableList = () => {
    return(
        <div className="w-full overflow-hidden rounded-lg shadow-xs">
        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="text-[18px] font-semibold tracking-wide text-white uppercase border-b bg-transparent">
                <th className="px-4 py-3 text-center">ID</th>
                <th className="px-4 py-3 text-center">TITLE</th>
                <th className="px-4 py-3 text-center">ARTIST</th>
                <th className="px-4 py-3 text-center">TIME</th>
              </tr>
            </thead>
              {dataPlaylist.map((dataPlaylist) => (
            <tbody className="bg-transparent">
                <tr className="text-[15px]  tracking-wide text-white border-0 bg-transparent">
                <td className="px-4 py-3 text-center" >{dataPlaylist.id}</td>
                <td className="px-4 py-3 text-center">{dataPlaylist.title}</td>
                <td className="px-4 py-3 text-center">{dataPlaylist.artis}</td>
                <td className="px-4 py-3 text-center">{dataPlaylist.time}</td>
              </tr>
            </tbody>
                ))}
          </table>
        </div>
      </div>
    )
}
export default TableList;