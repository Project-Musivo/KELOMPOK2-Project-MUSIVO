import React from "react";
import { dataTopanime10 } from "../../data/music";

const DataTopanime10 = () => {
    return(
        <div className=" w-full  overflow-hidden shadow-xs">
        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="text-[18px] font-semibold tracking-wide text-white uppercase border-b bg-transparent">
                <th className=" py-3">#</th>
                {/* <th className=" py-3 text-right">ALBUM</th> */}
                <th className="px-3"></th>
                <th className="pl-2 py-3 text-left">title</th>
                <th className="py-3 pl-4 text-left">PLAYED</th>
                <th className="py-3 pl-6 text-left">ALBUM</th>
                <th className="py-3">TIME</th>
              </tr>
            </thead>
              {dataTopanime10.map((dataTopanime10) => (
            <tbody className="bg-transparent">
              <tr className="text-[15px] tracking-wide text-white border-0 bg-transparent">
                <td className="py-3 text-center" >{dataTopanime10.id}</td>
                <td className="py-3 text-right" >{dataTopanime10.image}</td>
                <td className="px-2 py-3 text-left">{dataTopanime10.title}<br/>{dataTopanime10.artis}</td>
                <td className="pl-2 py-3 text-left">{dataTopanime10.plays}</td>
                <td className="pl-10 py-3 text-left">{dataTopanime10.album}</td>
                <td className="py-3 text-center">{dataTopanime10.time}</td>
              </tr>
            </tbody>
                ))}
          </table>
        </div>
      </div>
    )
}
export default DataTopanime10;