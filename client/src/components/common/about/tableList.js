import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const TableList = ({ title, value }) => {
  return (
    <div className="flex flex-row items-center text-base gap-2">
      <div
        style={{
          color: "yellow",
        }}
      >
        <MdOutlineKeyboardArrowRight />
      </div>

      <div className="font-bold">{title}:</div>

      <div className="font-light">{value}</div>
    </div>
  );
};

export default TableList;
