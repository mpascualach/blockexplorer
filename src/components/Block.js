import React, { useEffect } from "react";
import BlockInterface from "../interfaces/BlockInterface";

const Block = ({ block }) => {
  // useEffect(() => {
  //   console.log("block in component: ", block);
  // }, [block]);

  const convertTimestamp = (timestamp) => {};
  return (
    <div className="block-details">
      <p>Block Number: {block.number}</p>
      {/* Other block information... */}
    </div>
  );
};

export default Block;
