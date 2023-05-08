import React from "react";

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
            <tbody className="bg-transparent">
              <tr className="text-[15px]  tracking-wide text-white border-0 bg-transparent">
                <td className="px-4 py-3 text-center">#1</td>
                <td className="px-4 py-3 text-center">Variasi Pink</td>
                <td className="px-4 py-3 text-center">Jason Ranti</td>
                <td className="px-4 py-3 text-center">04.56</td>
              </tr>
              <tr className="text-[15px]  tracking-wide text-white border-0 bg-transparent">
                <td className="px-4 py-3 text-center">#2</td>
                <td className="px-4 py-3 text-center">Not You</td>
                <td className="px-4 py-3 text-center">Alan Walker ft emma steinbakken</td>
                <td className="px-4 py-3 text-center">03.12</td>
              </tr>
              <tr className="text-[15px]  tracking-wide text-white border-0 bg-transparent">
                <td className="px-4 py-3 text-center ">#3</td>
                <td className="px-4 py-3 text-center">Diamonds</td>
                <td className="px-4 py-3 text-center">Rihanna</td>
                <td className="px-4 py-3 text-center">04.10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
}
export default TableList;