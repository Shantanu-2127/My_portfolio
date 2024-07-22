import React from "react";

const Interest = ({ imageUrl, imageName }) => {
  return (
    <div className="flex items-center bg-[#FFFFFF14] w-[297px] h-[72px] rounded-lg p-4 justify-between">
      <div className="w-[32px] h-[32px] overflow-hidden">
        <img
          src={imageUrl}
          alt={imageName}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col">
        <div className="text-lg font-semibold">{imageName}</div>
      </div>
    </div>
  );
};

export default Interest;
