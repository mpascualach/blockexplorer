import { Alchemy, Network } from "alchemy-sdk";
import { useEffect, useState } from "react";

import "./App.css";
import Block from "./components/BlockComponent";
// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const alchemy = new Alchemy(settings);

function App() {
  const [block, setBlock] = useState();
  const [blockNumber, setBlockNumber] = useState();

  useEffect(() => {
    if (!block) {
      async function getBlock() {
        // get current block number
        setBlockNumber(await alchemy.core.getBlockNumber());
        setBlock(await alchemy.core.getBlockWithTransactions(blockNumber));
      }

      getBlock();
    }
  });

  useEffect(() => {
    console.log(block);
  }, [block]);

  return (
    <div className="flex flex-col items-center p-10">
      <h1 className="text-4xl m-5">Block Explorer</h1>
      {block && <Block block={block} className="mt-5"></Block>}
    </div>
  );
}

export default App;
