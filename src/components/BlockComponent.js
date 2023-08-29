import React, { useEffect, useState } from "react";
import { Utils } from "alchemy-sdk";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Block = ({ block }) => {
  const [toggled, setToggle] = useState(false);

  useEffect(() => {
    calculateAvgValue(block);
  }, [block]);

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
      return a + parseFloat(Utils.formatUnits(b.value, "ether"));
    }, 0);
    return totalValue / block.transactions.length;
  };

  const roundNumber = (number) => {
    const decimalPlaces = 2;

    const factor = Math.pow(10, decimalPlaces);

    const roundedNumber = Math.floor(number * factor) / factor;
    return roundedNumber;
  };

  return (
    <div className="block-container w-full">
      <div className="block-details p-5 w-full bg-[#B27E41] rounded-[10px] flex justify-between text-white text-xl/[20px] shadow-md">
        <div
          className="flex flex-col items-start gap-[10px]"
          style={{ fontSize: "24px" }}
        >
          <p>Block #{block.number}</p>
          <p style={{ fontSize: "18px" }}>
            {convertTimestamp(block.timestamp)}
          </p>
        </div>
        <div className="flex flex-col items-start gap-[10px]">
          <p>Mined by: </p>
          <p>{block.miner}</p>
        </div>
        <div className="flex flex-col items-start gap-[10px]">
          <p>Average value: </p>
          <p>{roundNumber(calculateAvgValue(block))} ETH</p>
        </div>
        <div
          className="flex flex-col items-start gap-[10px] justify-center"
          onClick={() => setToggle(!toggled)}
        >
          <FontAwesomeIcon
            icon={toggled ? "caret-up" : "caret-down"}
          ></FontAwesomeIcon>
        </div>
      </div>
      {toggled &&
        block.transactions &&
        block.transactions.slice(0, 1).map((transaction, index) => (
          <div
            className="p-5 w-full bg-[#EADCDC] rounded-[10px] flex text-xl/[18px] shadow-md text-left relative pt-8"
            style={{
              zIndex: `${(index + 1) * -1}`,
              bottom: `${(index + 1) * 10}px`,
            }}
            key={index}
          >
            <div className="font-bold flex flex-col items-start gap-[10px] justify-center w-auto mr-10">
              {index}
            </div>
            <div className="flex flex-col items-start gap-[10px] justify-center w-1/6">
              <p>Type: {transaction.type}</p>
            </div>
            <div className="flex flex-col items-start gap-[10px] justify-center w-4/6">
              <p>
                From <span>{transaction.from}</span>
              </p>
              <p>
                to <span>{transaction.to}</span>
              </p>
            </div>
            <div className="flex flex-col items-start gap-[10px] justify-center w-1/6">
              <p>Value: </p>
              {roundNumber(Utils.formatUnits(transaction.value, "ether"))} ETH
            </div>
          </div>
        ))}
    </div>
  );
};

export default Block;
