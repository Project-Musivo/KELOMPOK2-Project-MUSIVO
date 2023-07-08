import React from 'react';
import { dataSongLyrics, popularTracks } from '../../data/music';

const Lyrics2 = () => {
  const songData = dataSongLyrics.find((dataSong) => dataSong.id === 1);
  const songDataa = popularTracks.find((song) => song.id === 1);
  const image = dataSongLyrics[0].image; 
  const imageArray = Array.from({ length: 5}, (_, index) => index);




  return (
    <>
      <div>
        <h2 className="font-bold ml-8 text-3xl h-14">Lyrics</h2>
        <p className="whitespace-pre-wrap font-sans text-base leading-6 text-left ml-9">
          {songData.lyrics}
        </p>
      </div>
    <br />
    <br />
      <div>
        <h1 className="font-bold ml-8 text-3xl">Popular Tracks by {songData.artis}</h1><br />
        <table className="w-full whitespace-no-wrap">
  <tbody className="bg-transparent">
    {popularTracks.map((song) => (
      <tr
        key={song.id}
        className="text-[15px] tracking-wide text-white border-0 bg-transparent"
      >
        <td className="px-4 py-3 text-center">{song.id}</td>
        <td className="px-4 py-3 text-center flex items-center">
          <img src={song.image} alt="" className="w-8 h-8 ml-0" />
          <span className="ml-7">{song.title}</span>
        </td>
        <td className="px-4 py-3 text-center">{song.listener}</td>
        <td className="px-4 py-3 text-center">{song.time}</td>
      </tr>
    ))}
  </tbody>
</table>
      </div><br /><br />

    <div>
    <h1 className="font-bold ml-8 text-3xl">Popular Tracks by {songData.artis}</h1><br />
        <div className="flex">
        {imageArray.map((item) => (
            <img
            key={item.id}
            src={image}
            alt=""
            className="w-[12rem] h-[12rem] mx-auto ml-auto"
            />
        ))}
        </div>
    </div><br /><br />


        
    <div>
    <h1 className="font-bold ml-8 text-3xl">Popular Tracks by {songData.artis}</h1><br />
        <div className="flex">
        {imageArray.map((item) => (
            <img
            key={item.id}
            src={image}
            alt=""
            className="w-[12rem] h-[12rem] mx-auto ml-auto"
            />
        ))}
        </div>
    </div>


        

    </> 
  );
};

export default Lyrics2;
