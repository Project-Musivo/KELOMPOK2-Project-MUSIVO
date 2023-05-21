import React from "react";
import { dataFavorit } from "../../data/music";

const Listfav = () => {
    return(
        <div className="bg-transparent-black w-full pt-[30px] overflow-hidden shadow-xs">
        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="text-[18px] font-semibold tracking-wide text-white uppercase border-b bg-transparent">
                <th className=" py-3">ID</th>
                {/* <th className=" py-3 text-right">ALBUM</th> */}
                <th className="px-3"></th>
                <th className="pl-2 py-3 text-left">TITLE</th>
                <th className="py-3 text-left">ARTIST</th>
                
                <th className="py-3 text-left">DATE ADD</th>
                <th className="py-3">TIME</th>
              </tr>
            </thead>
              {dataFavorit.map((dataFavorit) => (
            <tbody className="bg-transparent">
                <tr className="text-[15px]  tracking-wide text-white border-0 bg-transparent">
                <td className="py-3 text-center" >{dataFavorit.id}</td>
                <td className="py-3 text-right">{dataFavorit.image}</td>
                <td className="px-2 py-3 text-left">{dataFavorit.title}</td>
                <td className="pl-2 py-3 text-left">{dataFavorit.artis}</td>
                <td className="pl-10 py-3 text-left">{dataFavorit.date}</td>
                <td className="py-3 text-center">{dataFavorit.time}</td>
              </tr>
            </tbody>
                ))}
          </table>
        </div>
      </div>
    )
}
export default Listfav;