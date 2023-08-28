import React, { useEffect } from "react";
import BlockInterface from "../interfaces/BlockInterface";

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

  return (
    <div className="block-details p-2 w-full bg-[#976832] rounded-[10px] grid grid-cols-4 gap-4">
      <div>
        <p>#{block.number}</p>
      </div>
      <div>
        <p>Mined by: {block.miner} </p>
      </div>
      <div>
        <p>{convertTimestamp(block.timestamp)}</p>
      </div>
    </div>
  );
};

export default Block;
