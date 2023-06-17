import React from "react";
import { dataTopglobal50 } from "../../data/music";

const Topglobal50 = () => {
  return (
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
          {dataTopglobal50.map((dataTopglobal50, index) => (
            <tbody className="bg-transparent">
              <tr className="text-[15px]  tracking-wide text-white border-0 bg-transparent">
                <td className="py-3 text-center">{dataTopglobal50.id}</td>
                <td className="py-3 text-right">{dataTopglobal50.image}</td>
                <td className="px-2 py-3 text-left">
                  {dataTopglobal50.title} <br /> {dataTopglobal50.artis}
                </td>
                <td className="pl-2 py-3 text-left">{dataTopglobal50.plays}</td>
                <td className="pl-10 py-3 text-left">
                  {dataTopglobal50.album}
                </td>
                <td className="py-3 text-center">{dataTopglobal50.time}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};
export default Topglobal50;
