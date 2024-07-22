import React from 'react';

const SkillSlider = ({ skill, percentage }) => {
  return (
    <div className="w-full flex flex-col mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-lg font-semibold">{skill}</span>
        <span className="text-lg font-semibold">{percentage}%</span>
      </div>
      <div className="relative w-full h-5 bg-[#FFFFFF33] rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-[yellow] rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillSlider;
