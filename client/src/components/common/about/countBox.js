import React from "react";

const CountBox = ({ count, title, Icon }) => {
  return (
    <div className="relative w-[297px] h-[130px] bg-[#FFFFFF14] flex flex-col items-center justify-center text-center">
      <div className="absolute -top-6 flex items-center justify-center w-12 h-12 bg-[#FFFFFF1A] rounded-full">
        <Icon
          className="text-2xl"
          style={{
            color: "yellow",
          }}
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="text-2xl font-bold">{count}</div>
        <div className="text-xl font-light">{title}</div>
      </div>
    </div>
  );
};

export default CountBox;
