import React from "react";
import { dataMusic } from "../../data/music";

const TableListImg = () => {
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
              {dataMusic.map((dataMusic) => (
            <tbody className="bg-transparent">
                <tr className="text-[15px]  tracking-wide text-white border-0 bg-transparent">
                <td className="px-4 py-3 text-center" >{dataMusic.id}</td>
                <td className="px-4 py-3 text-center flex items-center"><img src={dataMusic.img} className="w-10 mr-2"/>{dataMusic.title}</td>
                <td className="px-4 py-3 text-center">{dataMusic.artis}</td>
                <td className="px-4 py-3 text-center">{dataMusic.time}</td>
              </tr>
            </tbody>
                ))}
          </table>
        </div>
      </div>
    )
}
export default TableListImg;