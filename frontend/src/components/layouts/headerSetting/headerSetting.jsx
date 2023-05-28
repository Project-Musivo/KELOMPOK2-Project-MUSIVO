const HeaderSetting = (props) => {
  return (
    <div className="border-b-2 h-[80px] w-full top-[68px] ps-[60px] pt-[15px] fixed mb-[100px] bg-[#141414]">
      <h2 className="text-[35px] font-semibold">{props.title}</h2>
    </div>
  );
};

export default HeaderSetting;
