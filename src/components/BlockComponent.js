import React, { useEffect, useState } from "react";
import { utils } from "ethers";

const Block = ({ block }) => {
  // useEffect(() => {
  //   console.log("block in component: ", block);
  // }, [block]);

  const convertTimestamp = (timestamp) => {
    const dateObject = new Date(timestamp * 1000);

    const year = dateObject.getFullYear();
    const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
    const day = dateObject.getDate().toString().padStart(2, "0");
    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();
    const seconds = dateObject.getSeconds();

    const formattedDate = `${day}-${month}-${year} - ${hours}:${minutes}:${seconds}`;
    return formattedDate;
  };

  const calculateAvgValue = (block) => {
    const totalValue = block.transactions.reduce((a, b) => {
      return a + b.value;
    }, 0);
  };

  return (
    <div className="block-details p-5 w-full bg-[#B27E41] rounded-[10px] flex justify-between text-white text-xl/[20px] shadow-md">
      <div
        className="flex flex-col items-start gap-[10px]"
        style={{ fontSize: "24px" }}
      >
        <p>Block #{block.number}</p>
        <p style={{ fontSize: "18px" }}>{convertTimestamp(block.timestamp)}</p>
      </div>
      <div className="flex flex-col items-start gap-[10px]">
        <p>Mined by: </p>
        <p>{block.miner}</p>
      </div>
      <div className="flex flex-col items-start gap-[10px]">
        <p>Average value: </p>
        <p></p>
      </div>
      <div className="flex flex-col items-start gap-[10px]"></div>
    </div>
  );
};

export default Block;
