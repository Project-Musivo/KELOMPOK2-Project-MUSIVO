import React from "react";

const InfoPremium = (props) => {
  return (
    <div className="mx-10 text-center py-20">
      <img src={`${props.img}`} alt="" className="w-[130px] mx-auto" />
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  );
};

export default InfoPremium;
